export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demo?: string;
  github: string;
  video?: string;
}

export const projects: Project[] = [
  {
    slug: "face-mask-detection",
    title: "Face Mask Detection System",
    description:
      "Real-time face mask detection using CNN and OpenCV with webcam support.",
    longDescription:
      "This project uses a CNN model with OpenCV to detect face masks in real time via webcam. It is optimized for live inference and deployed-ready.",
    tech: ["Python", "CNN", "OpenCV", "TensorFlow"],
    image: "/projects/face_mask.jpg",
    demo: "https://your-demo-link.com",
    github: "https://github.com/yourusername/face-mask-detection",
    video: "https://youtube.com/your-video-link",
  },
  {
    slug: "potato-diseases-clasification",
    title: "Potato Diseases Classification",
    description:
      "CNN-based medical image classification system deployed with Streamlit.",
    longDescription:
      "This project uses a CNN model with OpenCV to detect face masks in real time via webcam. It is optimized for live inference and deployed-ready.",
    tech: ["Deep Learning", "CNN", "Streamlit", "Python"],
    image: "/projects/potato_leaves.jpg",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/potato-diseases",
    video: "https://youtube.com/your-video-link",
  },
  {
    slug: "real-time-object-detection-and-tracking",
    title: "Real Time Object Detection and Tracking",
    description:
      "Full-stack job portal with Django backend and PostgreSQL database.",
    longDescription:
      "This project uses a CNN model with OpenCV to detect face masks in real time via webcam. It is optimized for live inference and deployed-ready.",
    tech: ["Django", "PostgreSQL", "Tailwind", "Deployment"],
    image: "/projects/multiple-object-tracking.jpg",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/realtime-object-detection-tracking",
    video: "https://youtube.com/your-video-link",
  },
  {
    slug: "cancer-image-classification",
    title: "Cancer Image Classification",
    description: "CNN-based medical image classification.",
    longDescription:
      "This project uses a CNN model with OpenCV to detect face masks in real time via webcam. It is optimized for live inference and deployed-ready.",
    tech: ["CNN", "Deep Learning", "Streamlit"],
    image: "/projects/cancer-classification.png",
    demo: "https://your-streamlit-app.com",
    github: "https://github.com/Raghav101010/cancer_image_detector",
    video: "https://youtube.com/your-video-link",
  },
];
