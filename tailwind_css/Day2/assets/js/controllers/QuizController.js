/**
 * ============================================================================
 * AI LEARN ENTERPRISE - QUIZ & ASSESSMENT CONTROLLER
 * ============================================================================
 */

window.QuizController = (function() {
    'use strict';

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answerSubmitted = false;

    function init() {
        if (!window.QuizModel) return;
        currentQuestions = window.QuizModel.getQuestions('general');
        currentIndex = 0;
        score = 0;
        answerSubmitted = false;
        loadQuestion();
    }

    function loadQuestion() {
        answerSubmitted = false;
        const q = currentQuestions[currentIndex];
        if (!q) return;

        const countEl = document.getElementById('quizQuestionCount');
        const scoreEl = document.getElementById('quizScoreText');
        const barEl = document.getElementById('quizProgressBar');
        const titleEl = document.getElementById('quizQuestionTitle');
        const container = document.getElementById('quizOptionsContainer');
        const feedback = document.getElementById('quizFeedback');
        const nextBtn = document.getElementById('nextQuestionBtn');

        if (countEl) countEl.innerText = `Assessment Item ${currentIndex + 1} of ${currentQuestions.length}`;
        if (scoreEl) scoreEl.innerText = `Score: ${score} pts`;
        if (barEl) barEl.style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
        if (titleEl) titleEl.innerText = q.question;

        if (feedback) {
            feedback.className = 'hidden mt-6 p-4 rounded-xl text-xs sm:text-sm font-medium transition-all';
            feedback.innerHTML = '';
        }
        if (nextBtn) nextBtn.classList.add('hidden');

        if (container) {
            container.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = `w-full text-left p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 transition-all flex items-center gap-4 text-xs sm:text-sm text-slate-200 group`;
                btn.onclick = () => selectAnswer(idx);
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono font-bold flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/40 group-hover:text-cyan-400">${letters[idx]}</span>
                    <span>${opt}</span>
                `;
                container.appendChild(btn);
            });
        }
    }

    function selectAnswer(selectedIndex) {
        if (answerSubmitted) return;
        answerSubmitted = true;

        const q = currentQuestions[currentIndex];
        const isCorrect = (selectedIndex === q.correctIndex);
        const container = document.getElementById('quizOptionsContainer');
        const buttons = container.querySelectorAll('button');

        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correctIndex) {
                btn.classList.add('border-emerald-500', 'bg-emerald-500/15', 'text-emerald-300');
            } else if (idx === selectedIndex) {
                btn.classList.add('border-rose-500', 'bg-rose-500/15', 'text-rose-300');
            }
        });

        const feedback = document.getElementById('quizFeedback');
        if (feedback) {
            feedback.classList.remove('hidden');
            if (isCorrect) {
                score++;
                feedback.classList.add('bg-emerald-500/10', 'border', 'border-emerald-500/30', 'text-emerald-300');
                feedback.innerHTML = `<strong>Verification Successful:</strong> ${q.explanation}`;
                if (window.NavigationController) window.NavigationController.showToast('Correct verification! +1 pt', 'checkCircle');
            } else {
                feedback.classList.add('bg-rose-500/10', 'border', 'border-rose-500/30', 'text-rose-300');
                feedback.innerHTML = `<strong>Incorrect Evaluation:</strong> Option ${['A','B','C','D'][q.correctIndex]} is correct. ${q.explanation}`;
            }
        }

        const scoreEl = document.getElementById('quizScoreText');
        if (scoreEl) scoreEl.innerText = `Score: ${score} pts`;

        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        const quizContent = document.getElementById('quizContent');
        const resultScreen = document.getElementById('quizResultScreen');
        const finalScoreDisplay = document.getElementById('finalScoreDisplay');

        if (quizContent) quizContent.classList.add('hidden');
        if (resultScreen) resultScreen.classList.remove('hidden');

        const percentage = Math.round((score / currentQuestions.length) * 100);
        if (finalScoreDisplay) {
            finalScoreDisplay.innerText = `Verified Assessment Score: ${score} / ${currentQuestions.length} (${percentage}%)`;
        }

        // Save to StorageService
        if (window.StorageService) {
            window.StorageService.saveQuizResult('AI Fundamentals', score, currentQuestions.length);
        }

        if (window.NavigationController) {
            window.NavigationController.showToast('Assessment Completed! Credentials Synced.', 'award');
        }
    }

    function restart() {
        currentIndex = 0;
        score = 0;
        const quizContent = document.getElementById('quizContent');
        const resultScreen = document.getElementById('quizResultScreen');
        if (quizContent) quizContent.classList.remove('hidden');
        if (resultScreen) resultScreen.classList.add('hidden');
        loadQuestion();
    }

    return {
        init: init,
        selectAnswer: selectAnswer,
        nextQuestion: nextQuestion,
        restart: restart
    };
})();
