/**
 * ============================================================================
 * AI LEARN ENTERPRISE - TOPIC MODEL (12 CORE AI DOMAINS)
 * ============================================================================
 */

window.TopicModel = (function() {
    'use strict';

    const topics = [
        {
            id: 'ai-core',
            title: 'Artificial Intelligence',
            category: 'Beginner',
            icon: 'brain',
            desc: 'The overarching science of designing computers to simulate human cognition, context processing, and autonomous decision-making.',
            keyFormula: 'Perception + Reasoning + Actuation = Intelligent System',
            realWorld: 'Space exploration rovers, chess supercomputers, adaptive recommendation engines.',
            curriculumLevel: 'Level 01',
            details: [
                'Symbolic AI and expert systems vs Connectionist deep learning',
                'Knowledge graphs and ontological reasoning systems',
                'Turing Test, Chinese Room Argument, and computational philosophy'
            ]
        },
        {
            id: 'ml-core',
            title: 'Machine Learning',
            category: 'Beginner',
            icon: 'chart',
            desc: 'Statistical learning algorithms that optimize predictive mathematical weights by analyzing training examples.',
            keyFormula: 'Minimize Cost J(θ) = 1/2m ∑ (h(x) - y)²',
            realWorld: 'Credit card fraud detection, dynamic pricing models, churn prediction.',
            curriculumLevel: 'Level 02',
            details: [
                'Supervised learning for labeled regression and classification',
                'Unsupervised clustering (K-Means, PCA dimensional reduction)',
                'Reinforcement learning with Markov Decision Processes (MDP)'
            ]
        },
        {
            id: 'dl-core',
            title: 'Deep Learning',
            category: 'Intermediate',
            icon: 'neural',
            desc: 'Multi-layered artificial neural architectures capable of hierarchical automated feature extraction from raw matrices.',
            keyFormula: 'a^[l] = g(W^[l] a^[l-1] + b^[l])',
            realWorld: 'Speech recognition, real-time language translation, autonomous driving.',
            curriculumLevel: 'Level 03',
            details: [
                'Activation functions: Rectified Linear Unit (ReLU), Leaky ReLU, Softmax',
                'Backpropagation error gradients calculated via calculus chain rule',
                'Vanishing/exploding gradient mitigation via batch normalization & residual skip connections'
            ]
        },
        {
            id: 'genai-core',
            title: 'Generative AI',
            category: 'Beginner',
            icon: 'sparkles',
            desc: 'Foundation models capable of producing entirely original text, images, audio, source code, and synthetic data.',
            keyFormula: 'P(W_n | W_1, W_2, ..., W_{n-1})',
            realWorld: 'ChatGPT, GitHub Copilot, Midjourney, Claude, Suno AI.',
            curriculumLevel: 'Level 04',
            details: [
                'Autoregressive next-token prediction over multi-billion parameter sets',
                'Denoising diffusion probabilistic models (DDPM) for visual synthesis',
                'RLHF (Reinforcement Learning from Human Feedback) preference alignment'
            ]
        },
        {
            id: 'nlp-core',
            title: 'Natural Language Processing',
            category: 'Intermediate',
            icon: 'book',
            desc: 'Computational linguistics enabling software to parse syntax, extract semantics, synthesize speech, and generate human dialogue.',
            keyFormula: 'Attention(Q, K, V) = softmax(QK^T / √d_k) V',
            realWorld: 'Automated legal document summarization, sentiment monitoring, voice assistants.',
            curriculumLevel: 'Level 04',
            details: [
                'Byte-pair encoding (BPE) and sub-word tokenization strategies',
                'Vector embeddings (Word2Vec, BERT, OpenAI text-embedding-3)',
                'Multi-head self-attention mechanisms capturing long-range dependencies'
            ]
        },
        {
            id: 'cv-core',
            title: 'Computer Vision',
            category: 'Intermediate',
            icon: 'eye',
            desc: 'Digital image processing and spatial convolutional filters that segment, classify, and track objects in live video feeds.',
            keyFormula: '(I * K)(x, y) = ∑∑ I(x-m, y-n) K(m, n)',
            realWorld: 'Tesla Autopilot visual perception, MRI tumor segmentations, biometric facial recognition.',
            curriculumLevel: 'Level 03',
            details: [
                'Kernel convolutions for edge, texture, and contour extraction',
                'Single Shot MultiBox Detector (SSD) & YOLO for real-time bounding box tracking',
                'Semantic and instance segmentation with Mask R-CNN architectures'
            ]
        },
        {
            id: 'robotics-core',
            title: 'Robotics & Embodied AI',
            category: 'Intermediate',
            icon: 'robot',
            desc: 'Physical autonomous systems combining computer vision, LiDAR telemetry, forward kinematics, and reinforcement learning.',
            keyFormula: 'Q(s, a) = r + γ max_a\' Q(s\', a\')',
            realWorld: 'Amazon warehouse fulfillment robots, Boston Dynamics Spot, surgical robots.',
            curriculumLevel: 'Level 05',
            details: [
                'Sim-to-real reinforcement learning transfer and physics engines',
                'Simultaneous Localization and Mapping (SLAM) algorithms',
                'Low-latency path planning and collision avoidance heuristics'
            ]
        },
        {
            id: 'nn-core',
            title: 'Artificial Neural Networks',
            category: 'Beginner',
            icon: 'cpu',
            desc: 'Mathematical computing graphs of interconnected weighted nodes inspired by biological cortical networks.',
            keyFormula: 'z = ∑ (w_i · x_i) + b',
            realWorld: 'Pattern recognition, financial time-series forecasting, sensor anomaly detection.',
            curriculumLevel: 'Level 03',
            details: [
                'Perceptrons and multi-layer perceptron (MLP) topologies',
                'Loss functions: Cross-Entropy, Mean Squared Error, Huber Loss',
                'Universal Approximation Theorem proof and mathematical boundaries'
            ]
        },
        {
            id: 'llm-core',
            title: 'Large Language Models (LLMs)',
            category: 'Intermediate',
            icon: 'database',
            desc: 'Trillion-token transformer models exhibiting emergent reasoning, in-context few-shot learning, and code generation.',
            keyFormula: 'L_text = - ∑ log P(x_i | x_{<i}; θ)',
            realWorld: 'Claude 3.5, GPT-4o, Gemini 1.5 Pro, Llama 3 open weights.',
            curriculumLevel: 'Level 04',
            details: [
                'Pre-training, Supervised Fine-Tuning (SFT), and Direct Preference Optimization (DPO)',
                'KV Cache optimization and rotary positional embeddings (RoPE)',
                'Long-context window handling up to 1-2 million tokens'
            ]
        },
        {
            id: 'prompt-core',
            title: 'Prompt Engineering',
            category: 'Beginner',
            icon: 'terminal',
            desc: 'The technical discipline of structuring input context, system framing, chain-of-thought, and output JSON schemas.',
            keyFormula: 'Role + Context + Constraints + Few-Shot Examples = Deterministic Output',
            realWorld: 'Production AI agents, automated workflow orchestration, structured ETL pipelines.',
            curriculumLevel: 'Level 02',
            details: [
                'Zero-shot vs One-shot vs Few-shot in-context demonstration techniques',
                'Chain-of-Thought (CoT) and Tree-of-Thoughts (ToT) reasoning prompts',
                'System prompt security and jailbreak vulnerability prevention'
            ]
        },
        {
            id: 'agents-core',
            title: 'Autonomous AI Agents',
            category: 'Intermediate',
            icon: 'zap',
            desc: 'Self-directing software programs that decompose goals, query APIs, execute code sandboxes, and loop through verification.',
            keyFormula: 'Observation → Thought → Action → Reflection Loop (ReAct)',
            realWorld: 'Autonomous coding agents (Devin, Antigravity), research bots, enterprise support automation.',
            curriculumLevel: 'Level 05',
            details: [
                'ReAct (Reason + Act) orchestration loops with error recovery',
                'Long-term vector database memory storage (Chroma, Pinecone)',
                'Tool calling and OpenAPI schema execution interfaces'
            ]
        },
        {
            id: 'ethics-core',
            title: 'AI Ethics & Alignment',
            category: 'Beginner',
            icon: 'shield',
            desc: 'The engineering of safety guardrails, demographic fairness, copyright compliance, and human value alignment.',
            keyFormula: 'Utility Optimization Subject to Safety & Non-Harm Constraints',
            realWorld: 'EU AI Act compliance, bias audits in hiring algorithms, watermarking generated media.',
            curriculumLevel: 'Level 05',
            details: [
                'Demographic parity, equalized odds, and fairness evaluation metrics',
                'Differential privacy and PII anonymization in training pipelines',
                'Red-teaming adversarial jailbreaks and automated constitutional guardrails'
            ]
        }
    ];

    function getAllTopics() {
        return topics;
    }

    function getTopicById(id) {
        return topics.find(t => t.id === id) || topics[0];
    }

    function getTopicsByCategory(cat) {
        if (!cat || cat === 'all') return topics;
        return topics.filter(t => t.category.toLowerCase() === cat.toLowerCase());
    }

    return {
        getAllTopics: getAllTopics,
        getTopicById: getTopicById,
        getTopicsByCategory: getTopicsByCategory
    };
})();
