/**
 * ============================================================================
 * AI LEARN ENTERPRISE - COURSE MODEL (MVC DATA LAYER)
 * ============================================================================
 */

window.CourseModel = (function() {
    'use strict';

    const courses = [
        {
            id: 'ai-fundamentals',
            title: 'AI Foundations & Modern Architecture',
            shortDesc: 'A comprehensive starter track establishing core cognitive machine theories, mathematical abstractions, and real-world pipelines.',
            category: 'fundamentals',
            difficulty: 'Beginner',
            icon: 'brain',
            duration: '4 Hours',
            lessonsCount: 6,
            rating: 4.9,
            studentsEnrolled: 24800,
            overview: 'This flagship foundational course demystifies the theoretical underpinnings of machine learning and modern artificial intelligence without burying you in esoteric mathematics. Designed specifically for aspiring software developers, product managers, and curious technologists.',
            learningOutcomes: [
                'Distinguish accurately between Narrow AI (ANI), Artificial General Intelligence (AGI), and Superintelligence (ASI)',
                'Understand the 4-phase data inference pipeline from feature engineering to inference',
                'Identify fundamental differences between heuristic algorithms and self-optimizing statistical models',
                'Formulate clean technical problem statements for machine learning viability'
            ],
            modules: [
                {
                    title: 'Module 1: The AI Paradigm Shift',
                    duration: '45 mins',
                    lessons: [
                        {
                            id: 'ai-101',
                            title: '1.1 What is Artificial Intelligence?',
                            duration: '10 mins',
                            type: 'video',
                            content: 'Artificial Intelligence (AI) refers to computational systems that simulate human cognitive functions such as learning from input data, abstract reasoning, generalization, and autonomous problem-solving.',
                            keyPoints: [
                                'Traditional Software: Rules + Data = Answers',
                                'Machine Learning: Data + Answers = Rules',
                                'Continuous feedback loops adjust internal model weights'
                            ],
                            codeExample: `# Conceptual difference in Python
# 1. Traditional Rule-Based Function
def is_spam(email_text):
    if "free money" in email_text.lower():
        return True
    return False

# 2. Machine Learning Approach (Learned Classifier)
# model.fit(training_emails, labels)
# prediction = model.predict([email_text])`
                        },
                        {
                            id: 'ai-102',
                            title: '1.2 History & Evolution: From Turing to Transformers',
                            duration: '15 mins',
                            type: 'reading',
                            content: 'From the Dartmouth Workshop in 1956 to expert systems in the 1980s and the GPU-fueled Deep Learning renaissance in 2012, AI has evolved through cycles of hype and winters into today’s multi-billion parameter foundation models.',
                            keyPoints: [
                                '1950: Alan Turing proposes the Imitation Game (Turing Test)',
                                '1997: IBM Deep Blue defeats Garry Kasparov in Chess',
                                '2012: AlexNet revolutionizes computer vision using CUDA GPUs',
                                '2017: Google researchers publish "Attention Is All You Need"'
                            ]
                        }
                    ]
                },
                {
                    title: 'Module 2: Types & Functional Classification',
                    duration: '1 Hour',
                    lessons: [
                        {
                            id: 'ai-201',
                            title: '2.1 Narrow AI vs General AI vs Super AI',
                            duration: '20 mins',
                            type: 'interactive',
                            content: '100% of all deployed systems today are Artificial Narrow Intelligence (ANI)—meaning they excel in bounded problem spaces but cannot generalize to unobserved domains.',
                            keyPoints: [
                                'ANI: Single domain specialist (e.g. AlphaFold, Siri, Autonomous Vehicles)',
                                'AGI: Cross-domain human-level cognitive flexibility',
                                'ASI: Vastly surpasses aggregate human biological intellect'
                            ]
                        },
                        {
                            id: 'ai-202',
                            title: '2.2 Reactive vs Limited Memory Architectures',
                            duration: '25 mins',
                            type: 'video',
                            content: 'Reactive systems have zero memory state and produce deterministic outputs based solely on the immediate sensory input. Limited memory systems maintain temporal rolling windows of observations.',
                            keyPoints: [
                                'Reactive: Fixed decision matrix without temporal state',
                                'Limited Memory: Tracks recent states (e.g. autonomous vehicle trajectory tracking)'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'machine-learning-mastery',
            title: 'Machine Learning: Algorithms to Production',
            shortDesc: 'Master supervised, unsupervised, and reinforcement learning paradigms with hands-on mathematical intuition.',
            category: 'ml',
            difficulty: 'Intermediate',
            icon: 'chart',
            duration: '6.5 Hours',
            lessonsCount: 8,
            rating: 4.95,
            studentsEnrolled: 18450,
            overview: 'Dive deep into modern machine learning. Understand regression, classification, clustering, bias-variance tradeoffs, and hyperparameter optimization using production best practices.',
            learningOutcomes: [
                'Implement gradient descent and cost function optimization from scratch',
                'Select appropriate algorithms between Random Forests, SVMs, and XGBoost',
                'Calculate Precision, Recall, F1-Score, and ROC-AUC curves',
                'Prevent catastrophic overfitting using regularization (L1/L2) and cross-validation'
            ],
            modules: [
                {
                    title: 'Module 1: Supervised Learning Mechanics',
                    duration: '1.5 Hours',
                    lessons: [
                        {
                            id: 'ml-101',
                            title: '1.1 Linear & Logistic Regression Intuition',
                            duration: '25 mins',
                            type: 'interactive',
                            content: 'Linear regression maps continuous numerical relationships using best-fit hyperplanes, while Logistic Regression applies the Sigmoid activation function to constrain outputs between 0 and 1 for binary classification.',
                            keyPoints: [
                                'Cost Function: Mean Squared Error (MSE)',
                                'Sigmoid Function: σ(z) = 1 / (1 + e^(-z))',
                                'Gradient Descent: θ = θ - α * ∇J(θ)'
                            ],
                            codeExample: `import numpy as np

# Simple Sigmoid Activation
def sigmoid(z):
    return 1.0 / (1.0 + np.exp(-z))

# Binary Cross Entropy Loss
def compute_loss(y_true, y_pred):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))`
                        }
                    ]
                }
            ]
        },
        {
            id: 'deep-learning-neural-nets',
            title: 'Deep Learning & Neural Architectures',
            shortDesc: 'Artificial neurons, backpropagation, Convolutional Neural Networks (CNNs), and Transformer foundation mechanics.',
            category: 'dl',
            difficulty: 'Intermediate',
            icon: 'neural',
            duration: '8 Hours',
            lessonsCount: 10,
            rating: 4.98,
            studentsEnrolled: 15200,
            overview: 'Explore multi-layer perceptrons, forward propagation, loss surfaces, vanishing gradient solutions (ReLU, ResNets), and spatial image filters with CNN architectures.',
            learningOutcomes: [
                'Build and train artificial neural networks in PyTorch',
                'Understand matrix dot products and tensor transformations',
                'Apply Convolutional layers for real-time spatial object detection',
                'Analyze attention mechanisms behind transformer blocks'
            ],
            modules: [
                {
                    title: 'Module 1: Biological to Artificial Neurons',
                    duration: '2 Hours',
                    lessons: [
                        {
                            id: 'dl-101',
                            title: '1.1 Forward & Backward Propagation',
                            duration: '35 mins',
                            type: 'video',
                            content: 'Neural networks learn by feeding inputs through interconnected layers of weights and non-linear activations (Forward Pass), then calculating loss gradients and adjusting weights backwards using the chain rule (Backpropagation).',
                            keyPoints: [
                                'Layer output: a = f(W · x + b)',
                                'Activation functions: ReLU, Leaky ReLU, GeLU, Softmax',
                                'Optimization algorithms: Adam, RMSprop, SGD with Momentum'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'generative-ai-llms',
            title: 'Generative AI, LLMs & Autonomous Agents',
            shortDesc: 'Harness Large Language Models, prompt engineering frameworks, retrieval-augmented generation (RAG), and agentic tool use.',
            category: 'genai',
            difficulty: 'Beginner',
            icon: 'sparkles',
            duration: '5 Hours',
            lessonsCount: 7,
            rating: 4.97,
            studentsEnrolled: 31200,
            overview: 'The definitive guide to modern Generative AI. Master autoregressive token generation, temperature controls, embedding vectors, vector databases, and multi-agent orchestration.',
            learningOutcomes: [
                'Design production-grade system prompts with chain-of-thought instructions',
                'Construct vector database indexes for custom document Q&A (RAG)',
                'Equip LLMs with function calling tools and external API access',
                'Evaluate hallucinations and apply deterministic guardrails'
            ],
            modules: [
                {
                    title: 'Module 1: LLM Core Mechanics',
                    duration: '1.5 Hours',
                    lessons: [
                        {
                            id: 'gen-101',
                            title: '1.1 How Large Language Models Predict Tokens',
                            duration: '25 mins',
                            type: 'interactive',
                            content: 'LLMs do not memorize text as raw strings; they break text into sub-word tokens, map them into high-dimensional vector spaces, and compute conditional probability distributions for the next token.',
                            keyPoints: [
                                '1 Token ≈ 0.75 English words',
                                'Temperature parameter controls sampling entropy (0.0 = deterministic, 1.0 = creative)',
                                'Context windows determine the active attention span of the model'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'computer-vision-engineering',
            title: 'Computer Vision & Visual AI Systems',
            shortDesc: 'Image segmentation, YOLO real-time object tracking, facial recognition pipelines, and diffusion models.',
            category: 'cv',
            difficulty: 'Intermediate',
            icon: 'eye',
            duration: '5.5 Hours',
            lessonsCount: 6,
            rating: 4.89,
            studentsEnrolled: 12100,
            overview: 'Understand how computers extract semantic meaning from raw RGB pixel matrices. Learn image preprocessing, kernel convolutions, bounding box regression, and visual segmentation.',
            learningOutcomes: [
                'Implement image filters and edge detection kernels',
                'Train real-time object detection models using YOLO architecture',
                'Segment visual scenes with pixel-level semantic masks',
                'Deploy computer vision models on edge camera hardware'
            ],
            modules: [
                {
                    title: 'Module 1: Pixel Matrix Operations',
                    duration: '1.2 Hours',
                    lessons: [
                        {
                            id: 'cv-101',
                            title: '1.1 Convolutions, Kernels & Pooling',
                            duration: '30 mins',
                            type: 'video',
                            content: 'Convolution layers pass small mathematical matrices (kernels) across images to highlight features like horizontal edges, corners, textures, and object silhouettes.',
                            keyPoints: [
                                'Kernels compute dot products over localized receptive fields',
                                'Max pooling reduces spatial dimensions while preserving dominant features',
                                'Stride and padding control output feature map resolutions'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'ai-ethics-governance',
            title: 'AI Safety, Alignment & Enterprise Ethics',
            shortDesc: 'Algorithmic bias mitigation, privacy regulations, GDPR compliance, red-teaming, and model safety guardrails.',
            category: 'ethics',
            difficulty: 'Beginner',
            icon: 'shield',
            duration: '3 Hours',
            lessonsCount: 5,
            rating: 4.92,
            studentsEnrolled: 9800,
            overview: 'Build responsible and legally sound AI systems. Explore real-world case studies in algorithmic fairness, training dataset copyright, model alignment (RLHF), and adversarial red-teaming.',
            learningOutcomes: [
                'Audit training data distributions for demographic and geographical bias',
                'Implement guardrails to prevent toxic, dangerous, or unauthorized model outputs',
                'Comply with emerging global AI frameworks (EU AI Act, NIST AI RMF)',
                'Design human-in-the-loop review workflows for high-stakes decisions'
            ],
            modules: [
                {
                    title: 'Module 1: Principles of Ethical AI',
                    duration: '1 Hour',
                    lessons: [
                        {
                            id: 'eth-101',
                            title: '1.1 Data Bias, Fairness & Representation',
                            duration: '20 mins',
                            type: 'reading',
                            content: 'Models reflect the biases encoded in their historical training corpora. Without proactive auditing and rebalancing, AI can systematically amplify societal inequities in loan approvals, hiring, and law enforcement.',
                            keyPoints: [
                                'Historical Bias vs Sampling Bias vs Measurement Bias',
                                'Disparate impact metrics and fairness constraints',
                                'Model explainability techniques (SHAP, LIME)'
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    function getAllCourses() {
        return courses;
    }

    function getCourseById(id) {
        return courses.find(c => c.id === id) || courses[0];
    }

    function getCoursesByCategory(category) {
        if (!category || category === 'all') return courses;
        return courses.filter(c => c.category === category);
    }

    function searchCourses(query) {
        if (!query) return courses;
        const q = query.toLowerCase();
        return courses.filter(c => 
            c.title.toLowerCase().includes(q) || 
            c.shortDesc.toLowerCase().includes(q) ||
            c.difficulty.toLowerCase().includes(q)
        );
    }

    return {
        getAllCourses: getAllCourses,
        getCourseById: getCourseById,
        getCoursesByCategory: getCoursesByCategory,
        searchCourses: searchCourses
    };
})();
