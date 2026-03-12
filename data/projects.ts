export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demo?: string;
  demo1?: string;
  demo2?: string;
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
      "Project Description: This project is a real-time computer vision application that detects whether a person is wearing a face mask using a Convolutional Neural Network (CNN) and live webcam input. The system performs face detection, mask classification, and displays real-time analytics through an interactive Streamlit dashboard. The project is configured with two remotes: GitHub (origin) and Hugging Face (hf). Code pushed to the Hugging Face remote is automatically deployed on Hugging Face Spaces. The GitHub repository contains two branches: main and raghav. The main branch includes the full project with the trained 121 MB model, which is packaged inside a Docker container and deployed on Railway. The raghav branch is configured for deployment on Streamlit Cloud. Due to browser WebRTC restrictions in some cloud environments, the webcam stream closes automatically when webcam is turned on. However, the application runs completely as intended when executed locally.",
    tech: ["Python", "CNN", "OpenCV", "TensorFlow", "Haar Cascade Face Detection", "Streamlit", "streamlit-webrtc", "NumPy", "Pandas", "Docker", "Railway", "Hugging Face Spaces"],
    image: "/projects/face_mask.jpg",
    demo: "https://huggingface.co/spaces/raghav101010/face-mask-classifier",
    demo1: "https://face-mask-app-production.up.railway.app",
    demo2: "https://face-mask-classifier-cfymhgjvt7kqxvlydzgqi5.streamlit.app",
    github: "https://github.com/Raghav101010/face-mask-classifier",
    architecture: "/projects/face-mask-architecture.png",
  },
  {
    slug: "potato-diseases-clasification",
    title: "Potato Diseases Classifier",
    description:
      "A cloud-deployed deep learning web app that detects potato leaf diseases using a TensorFlow model served through a FastAPI API and a React frontend",
    longDescription:
      "Project Description: Potato Disease Detection is an end-to-end deep learning web application that classifies potato leaf diseases from uploaded images. The system uses a convolutional neural network built with TensorFlow to identify diseases such as Early Blight, Late Blight, and Healthy leaves. A high-performance backend API was developed using FastAPI to serve the trained model for real-time predictions. The user interface was built with React to provide an intuitive experience for image upload and result visualization. Users can upload a potato leaf image and receive instant disease classification along with prediction confidence. The frontend application is deployed on Vercel for fast and reliable global delivery. The backend API hosting and model inference are managed on Render. The system follows a REST API architecture where the frontend communicates with the backend using HTTP requests. Image preprocessing, model inference, and prediction generation are handled within the API service.",
    tech: ["Deep Learning", "CNN", "TensorFlow", "Python", "FastAPI", "Uvicorn", "Pillow", "NumPy", "Render (API hosting)", "React", "REST API", "Vercel (frontend deployment)"],
    image: "/projects/potato_leaves.jpg",
    demo: "https://potato-diseases-react-app1.vercel.app",
    demo1: "https://potato-disease-api-kbjy.onrender.com/docs",
    github: "https://github.com/Raghav101010/potato-diseases",
    architecture: "/projects/potato-diseases-architecture.png",
  },
  {
    slug: "real-time-object-detection-and-tracking",
    title: "Video Baased Object Detection, Tracking and Bi-directional Counting",
    description:
      "Video Baased person detection using YOLOv8, tracking with unique IDs and bi-directional counting",
    longDescription:
      "Project Description: This project is a real-time computer vision application that detects and tracks people in video using YOLOv8 for object detection and DeepSORT for multi-object tracking. The system assigns unique IDs to each detected person and tracks their movement across frames. A line-based bi-directional counting mechanism determines whether a person moves UP or DOWN when crossing a defined boundary. The architecture follows a modular design with separate modules for detection, tracking, counting, and video processing. Performance optimization techniques such as frame skipping and frame resizing are implemented to improve processing speed. The application also monitors Inference FPS and Display FPS for real-time performance insights. After processing, the system generates an annotated video with bounding boxes, IDs, and directional counters. The processed video is then encoded and returned to the user interface. A Streamlit-based web interface allows users to upload videos and view results interactively. The entire application is deployed on Streamlit Community Cloud, making the system accessible directly through the browser.",
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
