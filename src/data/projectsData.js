import KTravelImg from "../components/K-travel.png";
import MockupThumbnail from "../components/mockup.png";
import PortfolioPic from "../components/Portfolio.png";
import MonetizationPoster from "../components/Society.png";
import WebbAppImg from "../components/Web App.png";
import Mockups from "../components/Figma mockups.png";
import SwordImg from "../components/Sword.jpg";
import PillarsImg from "../components/Pillars.png";

export const projects = [
    // 🌐 Web Development
    {
        title: "K-Travel Website",
        text: "A responsive travel website built with HTML, CSS, and JavaScript showcasing tour destinations.",
        img: KTravelImg,
        link: "https://asfand-raja.github.io/K-travel/index.html",
        category: "Web Development",
    },
    {
        title: "Portfolio Website",
        text: "A modern, responsive personal portfolio built using React and Bootstrap to showcase my work and achievements.",
        img: PortfolioPic,
        link: "#",
        category: "Web Development",
        isPortfolio: true,
    },
    {
        title: "Web App Landing Page",
        text: "Developed an elegant restaurant landing page with smooth animations, menus, and responsive sections.",
        img: WebbAppImg,
        link: "#",
        category: "Web Development",
        isNotDeployed: true,
    },

    // 🎨 Graphic Design
    {
        title: "Online Shopping Mock-up",
        text: "Designed an engaging online shopping mock-up using Canva, blending typography and imagery effectively.",
        img: MockupThumbnail,
        link: "/Mockup.png",
        category: "Graphic Design",
    },
    {
        title: "Monetization Poster",
        text: "Designed impactful banners for university events and competitions, emphasizing color psychology and clarity.",
        img: MonetizationPoster,
        link: "/society.pdf",
        category: "Graphic Design",
    },

    // 🖌 UI Design (Moved from Graphic Design/Figma)
    {
        title: "Figma Mockups",
        text: "Designed impactful figma mockups for an Eldercare App emphasizing and covering all real world most needed facilities to help both Volunteers and Caregivers.",
        img: Mockups,
        link: "/ElderCare/index.html",
        category: "UI Design", // Changed from Graphic Design to UI Design
    },

    //  Blender (Treating as pseudo-Graphic Design for now, or kept as Blender and we render both on GD page)
    {
        title: "Sword Model",
        text: "Modeled a medieval-style sword in Blender with metallic materials and realistic lighting setup.",
        img: SwordImg,
        link: "/sword/sword_done.blend",
        category: "Blender",
        isDownload: true,
    },
    {
        title: "Minecraft Pillars",
        text: "Created immersive Minecraft shader pillars featuring animated breakable blocks, enhancing the visual and interactive experience.",
        img: PillarsImg,
        link: "/sword/pillars_minecraft.blend",
        category: "Blender",
        isDownload: true,
    }
];
