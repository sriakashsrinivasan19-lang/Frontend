/**
 * ============================================================================
 * AI LEARN ENTERPRISE - QUIZ MODEL (ASSESSMENT DATA LAYER)
 * ============================================================================
 */

window.QuizModel = (function() {
    'use strict';

    const questionBanks = {
        'general': [
            {
                id: 'q1',
                question: 'What is the precise definition of Artificial Intelligence in modern computer science?',
                options: [
                    'Hardware circuits that physically replace human biological brains',
                    'Computational systems designed to perform cognitive tasks that typically require human intelligence',
                    'Static software code containing millions of nested IF-ELSE conditional rules',
                    'Automated robotic machinery restricted strictly to factory assembly lines'
                ],
                correctIndex: 1,
                explanation: 'AI refers to software and computing systems capable of perception, reasoning, pattern recognition, and autonomous learning.'
            },
            {
                id: 'q2',
                question: 'Which of the following constitutes an example of Artificial Narrow Intelligence (ANI)?',
                options: [
                    'A superconscious machine capable of mastering all scientific disciplines simultaneously',
                    'Siri answering voice queries or AlphaFold predicting protein structures',
                    'A humanoid robot possessing emotional self-awareness and free will',
                    'A universal sentient intellect that exceeds all human biological intelligence'
                ],
                correctIndex: 1,
                explanation: '100% of all artificial intelligence systems deployed in the real world today are Narrow AI (ANI), specialized in specific domain tasks.'
            },
            {
                id: 'q3',
                question: 'What is the structural hierarchy between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)?',
                options: [
                    'Deep Learning contains Machine Learning, which contains Artificial Intelligence',
                    'Machine Learning and Deep Learning are completely unrelated to AI',
                    'Deep Learning is a subset of Machine Learning, which is a subset of Artificial Intelligence',
                    'AI and Deep Learning are identical terms with no structural hierarchy'
                ],
                correctIndex: 2,
                explanation: 'Deep Learning is a specialized subfield of Machine Learning utilizing multi-layer neural networks, which is itself a branch of Artificial Intelligence.'
            },
            {
                id: 'q4',
                question: 'In deep neural networks, what mathematical algorithm is used to compute error gradients for updating layer weights?',
                options: [
                    'Forward Propagation',
                    'Backpropagation via Calculus Chain Rule',
                    'Bubble Sort Algorithm',
                    'Breadth-First Search Matrix'
                ],
                correctIndex: 1,
                explanation: 'Backpropagation calculates the partial derivatives of the loss function with respect to every weight using the calculus chain rule, enabling gradient descent.'
            },
            {
                id: 'q5',
                question: 'What is the primary role of "Temperature" in Large Language Model (LLM) inference?',
                options: [
                    'Controls the physical CPU/GPU hardware operating temperature in Celsius',
                    'Controls the randomness and entropy of token probability sampling (0.0 = deterministic, 1.0 = creative)',
                    'Determines the physical memory allocation on server clusters',
                    'Sets the internet network transmission timeout in milliseconds'
                ],
                correctIndex: 1,
                explanation: 'The temperature parameter scales the logits before the Softmax layer, flattening or sharpening the probability distribution over candidate tokens.'
            },
            {
                id: 'q6',
                question: 'What is the phenomenon called when a machine learning model memorizes training data but fails to generalize to unseen test data?',
                options: [
                    'Underfitting',
                    'Overfitting',
                    'Quantization',
                    'Tokenization'
                ],
                correctIndex: 1,
                explanation: 'Overfitting occurs when a model learns noise and idiosyncrasies in the training dataset rather than the underlying generalizable patterns.'
            }
        ]
    };

    function getQuestions(category = 'general') {
        return questionBanks[category] || questionBanks['general'];
    }

    return {
        getQuestions: getQuestions
    };
})();
