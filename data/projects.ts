export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demo?: string;
  github: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    slug: "face-mask-detection",
    title: "Face Mask Detection System",
    description:
      "A real-time computer vision application that detects whether a person is wearing a face mask using a Convolutional Neural Network (CNN) and live webcam input",
    longDescription:
      "A real-time computer vision application that detects whether a person is wearing a face mask using a Convolutional Neural Network (CNN) and live webcam input. The application performs face detection, mask classification, and real-time analytics visualization through an interactive Streamlit dashboard. Deployed on Hugging Face Spaces at https://huggingface.co/spaces/raghav101010/face-mask-classifier and on Railway using docker container deployment at https://face-mask-app-production.up.railway.app",
    tech: ["Python", "CNN", "OpenCV", "TensorFlow", "Haar Cascade Face Detection", "Streamlit", "streamlit-webrtc", "NumPy", "Pandas", "Docker", "Railway", "Hugging Face Spaces"],
    image: "/projects/face_mask.jpg",
    demo: "https://huggingface.co/spaces/raghav101010/face-mask-classifier",
    github: "https://github.com/Raghav101010/face-mask-classifier",
    architecture: "/projects/face-mask-architecture.png",
  },
  {
    slug: "potato-diseases-clasification",
    title: "Potato Diseases Classifier",
    description:
      "A cloud-deployed deep learning web app that detects potato leaf diseases using a TensorFlow model served through a FastAPI API and a React frontend",
    longDescription:
      "A full-stack machine learning application that detects potato leaf diseases from uploaded images using a deep learning model. The backend API is built with FastAPI and serves a TensorFlow model for real-time predictions, while the frontend is developed with React to provide a simple interface for image upload and results visualization. The system is deployed in the cloud with the API hosted on Render and the web interface on Vercel, enabling users to upload images and receive instant disease classification and confidence scores.",
    tech: ["Deep Learning", "CNN", "TensorFlow", "Python", "FastAPI", "Uvicorn", "Pillow", "NumPy", "Render (API hosting)", "React", "REST API", "Vercel (frontend deployment)"],
    image: "/projects/potato_leaves.jpg",
    demo: "https://potato-diseases-react-app1.vercel.app",
    github: "https://github.com/Raghav101010/potato-diseases",
    architecture: "/projects/potato-diseases-architecture.png",
  },
  {
    slug: "real-time-object-detection-and-tracking",
    title: "Video Baased Object Detection, Tracking and Bi-directional Counting",
    description:
      "Video Baased person detection using YOLOv8, tracking with unique IDs and bi-directional counting",
    longDescription:
      "A production-ready computer vision application that performs detection using YOLOv8, tracks individuals with unique IDs, and counts directional movement (UP/DOWN) based on line-crossing logic. The system includes performance monitoring (Inference & Display FPS), frame optimization techniques, and browser-compatible video encoding. Deployed on Streamlit Community Cloud for live interaction.",
    tech: ["Python", "OpenCV", "Ultralytics YOLOv8", "DeepSORT / Custom Tracker", "Streamlit", "FFmpeg", "Streamlit Cloud (Deployment)", "Performce Optimization"],
    image: "/projects/multiple-object-tracking.jpg",
    demo: "https://realtime-object-detection-tracking-5cykoo7oygeps4iknae9lu.streamlit.app/",
    github: "https://github.com/Raghav101010/realtime-object-detection-tracking",
    architecture: "/projects/object-tracking-architecture.png",
  },
  {
    slug: "face-analysis-system",
    title: "Face Analysis System (Coming Soon...)",
    description: "Face Analysis System",
    longDescription:
      "Face Analysis System ",
    tech: ["CNN", "Deep Learning", "Streamlit"],
    image: "/projects/face.png",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/face-analysis-system",
    architecture: "/projects/face.png",
  },
  {
    slug: "image-captioning",
    title: "Image Captioning (Coming Soon...)",
    description: "Image Captioning",
    longDescription:
      "Image Captioning",
    tech: ["CNN", "Deep Learning", "LLM"],
    image: "/projects/image_captioning.png",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/image-captioning",
    architecture: "/projects/image_captioning.png",
  },
  {
    slug: "ai-portfolio-assistant",
    title: "AI Portfolio Assistant (Coming Soon...)",
    description: "AI Portfolio Assistant",
    longDescription:
      "AI Portfolio Assistant",
    tech: ["CNN", "Deep Learning", "LLM", "Agentic AI", "RAG"],
    image: "/projects/ai-portfolio.png",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/ai-portfolio-assistant",
    architecture: "/projects/ai-portfolio.png",
  },
  
];
