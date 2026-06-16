import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {  useRef } from "react";

import mechanical from "@/assets/mechanical.webp";
import aneurysmImg from "@/assets/coiling.jpg";
import avmImg from "@/assets/Endovascular.webp";
import carotidImg from "@/assets/Carotid.jpg";
import tumourImg from "@/assets/Pre-Surgical Embolisation.jpg";

import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ClipboardCheck,
  Upload,
  Brain,
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Droplet,
  Waves,
  ShieldPlus,
  Star,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  MapPin,
  Play,
  Award,
  Microscope,
  GraduationCap,
  Globe,
  Building2,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react";
import heroImg from "@/assets/dr-mandeep-hero.png";
import aboutImg from "@/assets/dr-mandeep-hero.png";
import consultImg from "@/assets/consultation.jpg";
import strokeImg from "@/assets/stroke.png";
import Rupture from "@/assets/rupture.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mandeep Sagar — Interventional Neuroradiologist" },
      {
        name: "description",
        content:
          "Minimally invasive treatments for stroke, aneurysms, AVMs and complex neurovascular conditions. Book a consultation with Dr. Mandeep Sagar.",
      },
      { property: "og:title", content: "Dr. Mandeep Sagar — Interventional Neuroradiologist" },
      {
        property: "og:description",
        content:
          "Pinhole, image-guided neurovascular care. Get a second opinion on your scans and reports.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Conditions", href: "#conditions" },
  { label: "Treatments", href: "#treatments" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

const conditions = [
  {
    icon: Brain,
    title: "Acute Ischemic Stroke",
    image: "/conditions/stroke.png",
    badge: "Emergency Condition",
    description:
      "Occurs when a blood clot blocks an artery in the brain, cutting off blood flow and causing sudden symptoms.",

    symptoms:
      "Facial droop, arm weakness, speech difficulty, sudden vision loss.",

    importance:
      "Time is critical. Early treatment can prevent permanent brain damage and significantly improve recovery.",

    treatment:
      "Mechanical thrombectomy to remove the clot and restore blood flow.",

    short: "Emergency care",
  },

  {
    icon: Activity,
    title: "Brain Aneurysm",
    image: "/conditions/aneurysm.png",
    badge: "Neurovascular Condition",

    description:
      "A weak or bulging area in a brain artery that can rupture and cause life-threatening bleeding.",

    symptoms:
      "Severe thunderclap headache, nausea, vomiting, neck stiffness.",

    importance:
      "Early diagnosis and treatment can prevent rupture and serious complications.",

    treatment:
      "Endovascular coiling, flow diversion and stent-assisted procedures.",

    short: "Severe headache",
  },

  {
    icon: Waves,
    title: "Brain AVM & Fistula",
    image: "/conditions/avm.png",
    badge: "Complex Vascular Disorder",

    description:
      "Abnormal connections between arteries and veins disrupting normal blood flow.",

    symptoms:
      "Seizures, headaches, neurological deficits and bleeding.",

    importance:
      "Untreated AVMs carry a risk of haemorrhage and long-term neurological damage.",

    treatment:
      "Endovascular embolisation using Onyx, glue and advanced neurointerventional techniques.",

    short: "Seizures, headache",
  },

  {
    icon: HeartPulse,
    title: "Carotid Disease",
    image: "/conditions/carotid.png",
    badge: "Stroke Prevention",

    description:
      "Narrowing of the carotid arteries supplying blood to the brain.",

    symptoms:
      "Mini-strokes, dizziness, transient vision loss and weakness.",

    importance:
      "A major cause of stroke if left untreated.",

    treatment:
      "Carotid artery stenting with neuroprotection devices.",

    short: "Stroke prevention",
  },

  {
    icon: Droplet,
    title: "Brain Haemorrhage",
    image: "/conditions/haemorrhage.png",
    badge: "Critical Condition",

    description:
      "Bleeding inside the brain caused by ruptured vessels or vascular abnormalities.",

    symptoms:
      "Sudden severe headache, weakness, confusion and loss of consciousness.",

    importance:
      "Requires urgent diagnosis and treatment to minimise brain injury.",

    treatment:
      "Emergency neurointerventional procedures and vascular repair.",

    short: "Bleed in the brain",
  },

  {
    icon: Zap,
    title: "Spine Vascular Disorders",
    image: "/conditions/spine.png",
    badge: "Spinal Intervention",

    description:
      "Abnormal blood vessels affecting the spinal cord and surrounding structures.",

    symptoms:
      "Back pain, weakness, numbness and walking difficulties.",

    importance:
      "Delayed treatment can result in permanent neurological disability.",

    treatment:
      "Spinal AVM embolisation and targeted vascular interventions.",

    short: "Back pain, weakness",
  },

  {
    icon: ShieldPlus,
    title: "Head & Neck Tumours",
    image: "/conditions/tumour.png",
    badge: "Tumour Care",

    description:
      "Highly vascular tumours that benefit from blood supply reduction before surgery.",

    symptoms:
      "Swelling, pain, bleeding and pressure-related symptoms.",

    importance:
      "Pre-surgical embolisation improves surgical safety and outcomes.",

    treatment:
      "Tumour embolisation using advanced catheter-based techniques.",

    short: "Pre-surgical care",
  },

  {
    icon: Stethoscope,
    title: "Peripheral Vascular Disease",
    image: "/conditions/peripheral.png",
    badge: "Peripheral Intervention",

    description:
      "Diseases affecting blood vessels outside the brain and heart.",

    symptoms:
      "Leg pain, swelling, varicose veins and fibroid-related symptoms.",

    importance:
      "Can affect quality of life and circulation if untreated.",

    treatment:
      "Varicose vein procedures, embolisation and vascular interventions.",

    short: "Leg pain, swelling",
  },
];

export const featured = [
  {
    image: strokeImg,
    title: "Acute Ischemic Stroke",
    symptoms: "Facial droop, arm weakness, speech difficulty",
    treatment: "Mechanical thrombectomy within the golden window",
  },
  {
    image: Rupture,
    title: "Ruptured Aneurysm",
    symptoms: "Worst headache of life, vomiting, photophobia",
    treatment: "Endovascular coiling and flow diversion",
  },
  {
    image: "/conditions/avm.png",
    title: "Brain AVM",
    symptoms: "Seizures, headaches, focal neurological deficit",
    treatment: "Glue / Onyx embolisation, staged approach",
  },
  {
    image: "/conditions/carotid.png",
    title: "Carotid Stenosis",
    symptoms: "TIA, mini-strokes, transient vision loss",
    treatment: "Carotid artery stenting with neuroprotection",
  },
  {
    image: "/conditions/fistula.png",
    title: "Dural AV Fistula",
    symptoms: "Pulsatile tinnitus, headaches",
    treatment: "Endovascular embolisation",
  },
  {
    image: "/conditions/fibroid.png",
    title: "Uterine Fibroids",
    symptoms: "Heavy bleeding, pelvic pain",
    treatment: "Uterine artery embolisation",
  },
  {
    image: "/conditions/varicose.png",
    title: "Varicose Veins",
    symptoms: "Leg heaviness, swelling, visible veins",
    treatment: "Laser ablation and sclerotherapy",
  },
  {
    image: "/conditions/body_tumour.png",
    title: "Liver / Kidney Tumours",
    symptoms: "Abdominal pain, fatigue, weight loss",
    treatment: "Tumour embolisation procedures",
  },
];

const treatments = [
  {
    key: "stroke",
    label: "Stroke Care",
    title: "Mechanical Thrombectomy",
    image: mechanical,

    body:
      "A catheter-based retrieval of the clot blocking a brain artery — restoring blood flow within minutes and dramatically improving recovery when delivered fast.",

    points: [
      "24×7 Stroke Response",
      "Aspiration + Stent Retriever",
      "DSA-Guided Precision",
    ],
  },

  {
    key: "aneurysm",
    label: "Aneurysm",
    title: "Coiling & Flow Diversion",
    image: aneurysmImg,

    body:
      "Soft platinum coils or a flow-diverting stent seal the aneurysm from inside the vessel — avoiding open surgery and enabling faster recovery.",

    points: [
      "WEB Device",
      "Pipeline / Surpass Stents",
      "Day-Care Procedures",
    ],
  },

  {
    key: "avm",
    label: "AVM / Fistula",
    title: "Endovascular Embolisation",
    image: avmImg,

    body:
      "Advanced embolisation using Onyx and glue technology to close abnormal vessel connections while preserving healthy circulation.",

    points: [
      "Onyx & nBCA Glue",
      "Staged Treatment Plans",
      "Cranial & Spinal AVMs",
    ],
  },

  {
    key: "carotid",
    label: "Carotid",
    title: "Carotid Artery Stenting",
    image: carotidImg,

    body:
      "Minimally invasive carotid stenting performed under image guidance to restore blood flow and reduce future stroke risk.",

    points: [
      "Embolic Protection",
      "Local Anaesthesia",
      "Rapid Recovery",
    ],
  },

  {
    key: "tumour",
    label: "Tumour Embolisation",
    title: "Pre-Surgical Embolisation",
    image: tumourImg,

    body:
      "Blocking blood supply to vascular tumours before surgery, helping reduce blood loss and improving surgical precision.",

    points: [
      "Meningioma Treatment",
      "PVA & Microspheres",
      "Optimised Surgical Outcomes",
    ],
  },
];



const journey = [
  { icon: GraduationCap, title: "Medical Training", note: "MBBS, MD Radiodiagnosis" },
  { icon: Microscope, title: "Neurovascular Exposure", note: "Sub-specialty fellowships" },
  { icon: Award, title: "Dr Akash Handique", note: "Mentorship — neurointervention" },
  { icon: Award, title: "Dr Jawahar Rathod", note: "Mentorship — complex aneurysms" },
  { icon: Globe, title: "SLICE", note: "Live international stroke course" },
  { icon: Globe, title: "LINK Paris", note: "Advanced techniques workshop" },
  { icon: Globe, title: "KCR Seoul", note: "Korean Congress of Radiology" },
  { icon: Building2, title: "Current Practice", note: "Consultant Interventional Neuroradiologist" },
];

const media = [
  // {
  //   title: "News Coverage",
  //   source: "Daijiworld",
  //   href: "https://www.daijiworld.com/news/newsDisplay?newsID=1196108",
  //   image: "https://www.daijiworld.com/images/daijiworldLogo.png",
  // },
  {
    title: "Patient Testimonial",
    source: "YouTube",
    href: "https://youtu.be/kIOakr30MQE",
    image: "https://img.youtube.com/vi/kIOakr30MQE/0.jpg",
  },
  {
    title: "Procedure Explanation",
    source: "YouTube",
    href: "https://youtu.be/B5OLexU6sfE",
    image: "https://img.youtube.com/vi/B5OLexU6sfE/0.jpg",
  },
  {
    title: "Expert Interview",
    source: "YouTube",
    href: "https://youtu.be/9Vn1bM57B1Y",
    image: "https://img.youtube.com/vi/9Vn1bM57B1Y/0.jpg",
  },
  {
    title: "Conference Talk",
    source: "YouTube",
    href: "https://youtu.be/0CuC2jHjZaY",
    image: "https://img.youtube.com/vi/0CuC2jHjZaY/0.jpg",
  },
];

const stories = [
  { name: "Ramesh, 58", condition: "Acute Stroke", quote: "I was paralysed on one side. Within hours of the procedure I could move my arm again." },
  { name: "Anita, 42", condition: "Brain Aneurysm", quote: "I avoided open surgery. The coiling was done through my wrist and I went home in two days." },
  { name: "Suresh, 67", condition: "Carotid Stenosis", quote: "Dr Sagar explained everything calmly. The stent has stopped my mini-strokes completely." },
];

const faqs = [
  {
    q: "What is interventional neuroradiology?",
    a: "A minimally invasive sub-specialty that treats diseases of the brain, head, neck and spine using image-guided catheters — usually through a pinhole in the wrist or groin, without open surgery.",
  },
  {
    q: "Is the procedure painful or risky?",
    a: "Most procedures are done under local anaesthesia or light sedation. Risks exist as with any procedure, but for conditions like stroke and aneurysm, endovascular treatment is now the global standard of care.",
  },
  {
    q: "How long is the hospital stay?",
    a: "Many patients are discharged within 24–48 hours. Stroke and ruptured aneurysm cases need longer ICU care depending on severity.",
  },
  {
    q: "Do you accept insurance and offer a second opinion?",
    a: "Yes. Major insurers and TPAs are accepted at our partner hospitals. You can upload your reports above and we will respond with an opinion within 24 hours.",
  },
  {
    q: "What should I bring to my consultation?",
    a: "Carry your latest MRI / CT / angiography films and discs, previous prescriptions, and a list of current medications.",
  },
];

const locations = [
  { city: "New Delhi", hospital: "Apollo Hospitals, Sarita Vihar", day: "Mon, Wed, Fri" },
  { city: "Gurugram", hospital: "Medanta — The Medicity", day: "Tue, Thu" },
  { city: "Online", hospital: "Tele-consultation worldwide", day: "Sat" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Conditions />
      <UploadReports />
      <Featured />
      <Treatments />
      <MeetDoctor />
      <Journey />
      <Media />
      <Stories />
      <FAQ />
      <Locations />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#DCE9FF]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="h-[88px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="#top"
            className="
              text-[34px]
              font-medium
              tracking-[-1px]
              text-[#00000F]
              leading-none
            "
          >
            Dr. Mandeep
          </a>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-12
              absolute
              left-1/2
              -translate-x-1/2
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  text-[16px]
                  transition-colors
                  ${
                    link.label === "About"
                      ? "font-semibold text-[#00000F]"
                      : "font-normal text-[#4A4A50] hover:text-[#00000F]"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Link */}
          <a
            href="#contact"
            className="
              hidden
              lg:flex
              items-center
              gap-2
              text-[16px]
              font-medium
              text-[#2B6CF5]
              hover:opacity-80
              transition
            "
          >
            Contact Me

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="
              lg:hidden
              h-10
              w-10
              flex
              items-center
              justify-center
            "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Minus className="h-5 w-5" />
            ) : (
              <Plus className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden pb-6 pt-2">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#4A4A50]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-[#2B6CF5] font-medium"
              >
                Contact Me →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#DCE9FF] min-h-[calc(100vh-88px)] flex flex-col lg:block"
    >
      {/* WATERMARK */}
      <div
        className="
          absolute
          top-8
          md:top-10
          lg:top-[40px]
          left-1/2
          -translate-x-1/2
          text-[28vw]
          md:text-[20vw]
          lg:text-[16vw]
          font-bold
          text-white/20
          leading-none
          whitespace-nowrap
          pointer-events-none
          select-none
          z-0
        "
      >
        Mandeep
      </div>

      {/* DOCTOR IMAGE */}
      <div
        className="
          relative
          lg:absolute
          w-full
          lg:w-auto
          flex
          justify-center
          lg:block
          lg:left-0
          lg:translate-x-0
          bottom-0
          z-10
          pt-12
          lg:pt-0
        "
      >
        <img
          src={heroImg}
          alt="Dr. Mandeep Sagar"
          className="
            w-[85vw]
            max-w-[420px]
            md:max-w-[520px]
            lg:w-[38vw]
            lg:max-w-[700px]
            object-contain
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          px-6
          pt-8
          md:pt-12
          lg:px-0
          lg:pt-0
          lg:absolute
          lg:left-[48%]
          lg:bottom-[180px]
          max-w-[650px]
        "
      >
        <p
          className="
            text-lg
            md:text-xl
            lg:text-[22px]
            text-black
            mb-3
          "
        >
          Hey This is
        </p>

        <h1
          className="
            text-[48px]
            md:text-[64px]
            lg:text-[72px]
            xl:text-[88px]
            leading-[0.9]
            font-bold
            tracking-[-2px]
            text-[#050B2B]
          "
        >
          Dr. Mandeep
          <br />
          Sagar
        </h1>

        <p
          className="
            mt-5
            text-base
            md:text-lg
            lg:text-[22px]
            leading-relaxed
            text-[#4A4A50]
            max-w-[550px]
          "
        >
          Interventional Neuroradiologist — minimally invasive
          treatment for stroke, aneurysm and complex neurovascular
          disease.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="
              inline-flex
              justify-center
              items-center
              rounded-full
              bg-[#2B6CF5]
              px-8
              py-4
              text-white
              font-semibold
              transition
              hover:bg-[#1f5ae0]
            "
          >
            Book Consultation →
          </a>

          <a
            href="https://wa.me/919999999999"
            className="
              inline-flex
              justify-center
              items-center
              rounded-full
              bg-black
              px-8
              py-4
              text-white
              font-semibold
            "
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* RATING */}
      <div
        className="
          relative
          z-20
          px-6
          mt-10
          lg:absolute
          lg:left-12
          lg:bottom-12
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              text-4xl
              md:text-5xl
              font-semibold
              text-[#2B6CF5]
            "
          >
            4.9
          </span>

          <span
            className="
              text-3xl
              md:text-4xl
              text-[#2B6CF5]
            "
          >
            ★
          </span>
        </div>

        <p
          className="
            mt-3
            text-lg
            md:text-xl
            leading-snug
            max-w-[320px]
          "
        >
          Recommended by leading clinics and patients alike.
        </p>
      </div>

      {/* PATIENTS */}
      <div
        className="
          relative
          z-20
          px-6
          pb-10
          mt-8
          lg:absolute
          lg:right-12
          lg:bottom-12
          lg:text-right
        "
      >
        <div
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#050B2B]
          "
        >
          10k+
        </div>

        <p
          className="
            text-lg
            md:text-xl
            text-[#4A4A50]
          "
        >
          Satisfied Patients
        </p>
      </div>

      {/* WHITE FADE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[250px]
          md:h-[320px]
          lg:h-[420px]
          bg-gradient-to-t
          from-white
          via-white/95
          to-transparent
          z-10
        "
      />
    </section>
  );
}

/* ---------------- CONDITIONS ---------------- */
function Conditions() {
  const [active, setActive] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    setActive(index);

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <section id="conditions" className="py-20 lg:py-28">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-12">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Featured Conditions
            </p>

               <h2 className="font-display text-6xl lg:text-5xl leading-[0.92] font-normal">
              What problem
           
              <span className="text-primary">  are you facing?
</span>
            </h2>
          </div>

          <p className="max-w-md text-base lg:text-lg text-muted-foreground">
            Explore common neurovascular conditions we treat with advanced,
            minimally invasive procedures.
          </p>
        </div>

        {/* MOBILE SELECTOR */}
        <div className="lg:hidden mb-6">
          <div className="grid grid-cols-2 gap-3">
            {conditions.map((item, index) => (
              <button
                key={item.title}
                onClick={() => handleSelect(index)}
                className={`rounded-2xl border p-3 text-left transition-all ${
                  active === index
                    ? "border-primary bg-primary/5"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-xl"
                  />

                  <div>
                    <h4 className="font-semibold text-sm leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-xs text-muted-foreground mt-1">
                      {item.short}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SHOWCASE */}
       <div
  ref={detailRef}
  className="
    overflow-hidden
    rounded-[32px]
    bg-white
    border
    border-slate-200
    shadow-sm
    lg:h-[500px]
  "
>
<div className="grid lg:grid-cols-[50%_50%] h-full">
            {/* IMAGE */}
       <div className="bg-[#EEF4FF] h-[260px] md:h-[360px] lg:h-full overflow-hidden">
  <img
    src={conditions[active].image}
    alt={conditions[active].title}
    className="w-full h-full object-cover"
  />
</div>

            {/* CONTENT */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">

              <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-medium mb-4 w-fit">
                {conditions[active].badge}
              </div>

              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {conditions[active].title}
              </h3>

              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                {conditions[active].description}
              </p>

              <div className="grid md:grid-cols-3 gap-5 border-t border-slate-200 pt-6">

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Symptoms
                  </h4>

                  <p className="text-sm text-muted-foreground leading-6">
                    {conditions[active].symptoms}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Why it matters
                  </h4>

                  <p className="text-sm text-muted-foreground leading-6">
                    {conditions[active].importance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Treatment
                  </h4>

                  <p className="text-sm text-muted-foreground leading-6">
                    {conditions[active].treatment}
                  </p>
                </div>

              </div>

              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl font-medium w-fit hover:bg-primary/90 transition">
                Learn More
              </button>

            </div>
          </div>
        </div>

        {/* DESKTOP SELECTOR */}
        <div className="hidden lg:grid lg:grid-cols-8 gap-4 mt-6">
          {conditions.map((item, index) => (
            <button
              key={item.title}
              onClick={() => handleSelect(index)}
              className={`text-left rounded-2xl border p-3 transition-all ${
                active === index
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-slate-200 hover:border-primary/40"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain mb-2"
              />

              <h4 className="font-semibold text-sm leading-tight">
                {item.title}
              </h4>

              <p className="text-xs text-primary mt-2">
                {item.short}
              </p>
            </button>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-8 rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-semibold text-xl mb-1">
              Not sure which condition applies?
            </h3>

            <p className="text-muted-foreground">
              Talk to our expert and get the right guidance.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-xl font-medium whitespace-nowrap hover:bg-primary/90 transition"
          >
            Book Consultation
          </a>
        </div> */}

      </div>
    </section>
  );
}

/* ---------------- UPLOAD REPORTS ---------------- */


import {

  User,

  Pencil,
  ShieldCheck,
  Clock3,
 
} from "lucide-react";

import folderImg from "@/assets/folder.png";

export default function UploadReports() {
  const [fileName, setFileName] = useState<string | null>(null);

  const features = [
    {
      icon: Stethoscope,
      text: "Reviewed by Dr. Mandeep personally",
    },
    {
      icon: Clock3,
      text: "Response within 24 hours",
    },
    {
      icon: ShieldCheck,
      text: "Strict patient confidentiality",
    },
  ];

  return (
    <section
      id="upload"
      className="relative overflow-hidden py-28 bg-[#F5F9FF]"
    >
      {/* Background Decorative Circles */}
      <div className="absolute left-[-300px] bottom-[-300px] w-[900px] h-[900px] rounded-full border border-primary/10" />
      <div className="absolute left-[-220px] bottom-[-220px] w-[700px] h-[700px] rounded-full border border-primary/10" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[520px_1fr] gap-20 items-start">
          {/* LEFT */}
          <div>
          <br></br>
           <br></br>

           <h2 className="font-display text-6xl lg:text-5xl leading-[0.92] font-normal">
              Upload your medical reports
           
              <span className="text-primary">  and get your second opinion</span>
            </h2>

            <p className="mt-8 text-[22px] leading-relaxed text-slate-600 max-w-[450px]">
              Share your MRI, CT or angiography with us.
              Dr. Mandeep's team will respond personally
              within 24 hours.
            </p>

            {/* <img
              src={folderImg}
              alt="Folder"
              className="w-[320px] mt-12"
            /> */}

            <div className="space-y-4 mt-10">
              {features.map((item) => (
                <div
                  key={item.text}
                  className="bg-white rounded-[24px] border border-slate-200 h-[74px] flex items-center gap-4 px-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <span className="font-medium text-[18px] text-slate-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Floating Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10">
              <div className="w-20 h-20 rounded-full bg-primary shadow-2xl flex items-center justify-center">
                <Upload className="w-9 h-9 text-white" />
              </div>
            </div>

            <div className="bg-white rounded-[42px] border border-slate-200 p-6 lg:p-8 shadow-xl">
              {/* <h1 className="text-center text-[44px] font-bold text-[#081B44] mb-10 mt-6">
                Share your medical reports
              </h1> */}

<div className="space-y-2">                {/* NAME */}
                <FieldLabel label="NAME" />

                <InputWithIcon
                  icon={User}
                  placeholder="Full name"
                />

                {/* PHONE */}
                <FieldLabel label="PHONE" />

                <InputWithIcon
                  icon={Phone}
                  placeholder="+91 98765 43210"
                />

                {/* LOCATION */}
                <FieldLabel label="LOCATION" />

                <InputWithIcon
                  icon={MapPin}
                  placeholder="City, Country"
                />

                {/* CONCERN */}
                <FieldLabel label="CONCERN" />

                <div className="relative">
                  <Pencil className="absolute left-5 top-5 w-5 h-5 text-slate-500" />

                  <textarea
                    rows={3}
                    placeholder="Briefly describe your condition or symptoms"
                    className="w-full rounded-[22px] border border-slate-200 pl-14 pr-5 py-5 resize-none outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* REPORTS */}
                <FieldLabel label="REPORTS" />

                <label
  className="
    cursor-pointer
    flex flex-col
    items-center
    justify-center
    border-2
    border-dashed
    border-[#C9D8FF]
    rounded-[20px]
    h-[140px]
    text-center
    bg-[#FAFCFF]
    hover:bg-[#F5F9FF]
    transition
  "
>
  <Upload className="w-8 h-8 text-primary mb-3" />

  <h4 className="font-medium text-[15px] text-[#081B44]">
    {fileName ??
      "Drop or click to upload (PDF, JPG, DICOM)"}
  </h4>

  <p className="text-[13px] text-slate-500 mt-1">
    Max file size: 20MB
  </p>

  <input
    type="file"
    className="hidden"
    onChange={(e) =>
      setFileName(
        e.target.files?.[0]?.name ?? null
      )
    }
  />
</label>

                {/* BUTTON */}
               <button
  type="submit"
  className="
    w-full
    h-[60px]
    rounded-full
    bg-gradient-to-r
    from-[#2F6CF6]
    to-[#1E56D9]
    text-white
    text-[18px]
    font-semibold
    flex
    items-center
    justify-center
    gap-3
    hover:scale-[1.01]
    transition-all
  "
>
  Submit Reports
  <ArrowUpRight className="w-5 h-5" />
</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-white border border-slate-200 rounded-[28px] px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-5">
            <img
  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200"
  alt="Doctor"
  className="w-16 h-16 rounded-full object-cover"
/>

            <div>
              <h4 className="text-2xl font-semibold text-[#081B44]">
                Not sure what to upload?
              </h4>

              <p className="text-slate-600">
                Our team is here to help you with the right guidance.
              </p>
            </div>
          </div>

          <button className="border border-primary text-primary rounded-full px-8 py-4 flex items-center gap-2 font-medium hover:bg-primary hover:text-white transition">
            <MessageCircle size={18} />
            Talk to our team
          </button>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <p className="text-sm font-bold tracking-wide text-slate-700">
      {label}
    </p>
  );
}

function InputWithIcon({
  icon: Icon,
  placeholder,
}: {
  icon: any;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />

      <input
        placeholder={placeholder}
        className="w-full h-16 rounded-[20px] border border-slate-200 pl-14 pr-5 outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

/* ---------------- FEATURED CONDITIONS ---------------- */

function Featured() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary" />

              <p className="text-[11px] uppercase tracking-[0.35em] text-primary">
                Featured Conditions
              </p>
            </div>

            <h2 className="font-display text-6xl lg:text-5xl leading-[0.92] font-normal">
              Conditions
           
              <span className="text-primary">  we treat</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="featured-prev h-14 w-14 border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition">
              <ChevronLeft size={20} />
            </button>

            <button className="featured-next h-14 w-14 border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition">
              <ChevronRight size={20} />
            </button>

            <a
              href="#contact"
              className="h-14 px-10 bg-primary text-white uppercase tracking-[0.2em] text-sm flex items-center justify-center"
            >
              Ask Dr. Mandeep
            </a>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".featured-prev",
            nextEl: ".featured-next",
          }}
          spaceBetween={28}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1400: {
              slidesPerView: 4.5,
            },
          }}
        >
          {featured.map((item) => (
            <SwiperSlide key={item.title}>
<article className="group h-[520px] bg-white border border-neutral-200 overflow-hidden flex flex-col">                {/* IMAGE */}
<div className="relative h-[180px] overflow-hidden bg-neutral-100">                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5">
                    <span className="bg-primary text-white text-[10px] tracking-[0.25em] uppercase px-4 py-2">
                      Condition
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
<h3 className="text-2xl font-display leading-tight">
                      {item.title}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">
                        Symptoms
                      </p>

                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-2">
  {item.symptoms}
</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">
                        Treatment
                      </p>

                     <p className="text-sm text-slate-700 leading-relaxed line-clamp-2">
  {item.treatment}
</p>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="border-t border-neutral-200 px-7 py-5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-primary">
                    Learn More
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-primary transition-transform group-hover:translate-x-1"
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ---------------- TREATMENTS TABS ---------------- */
function Treatments() {
  const [active, setActive] = useState(treatments[0].key);

  const cur = treatments.find(
    (t) => t.key === active
  )!;

  return (
    <section
      id="treatments"
      className="py-24 lg:py-32 bg-[#EAF3FF]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-primary text-sm font-semibold mb-5">
            SECTION 05
          </p>

          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] text-[#081B44]">
            Advanced,
            <br />
            image-guided treatments.
          </h2>
        </div>

        {/* Premium Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {treatments.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`
                px-6 py-3
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                border
                ${
                  active === t.key
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white border-slate-200 text-[#081B44] hover:border-primary hover:text-primary"
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div
          className="
            bg-white
            rounded-[40px]
            p-6
            lg:p-10
            shadow-xl
            border
            border-slate-100
            grid
            lg:grid-cols-[1fr_520px]
            gap-12
            items-center
          "
        >
          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="uppercase tracking-[0.2em] text-primary text-xs font-semibold">
                Treatment Overview
              </span>
            </div>

            <h3 className="font-display text-4xl lg:text-5xl leading-tight text-[#081B44] mb-6">
              {cur.title}
            </h3>

            <p className="text-xl leading-relaxed text-slate-600 mb-10 max-w-[700px]">
              {cur.body}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cur.points.map((p) => (
                <div
                  key={p}
                  className="
                    flex
                    items-center
                    gap-4
                    bg-[#F8FBFF]
                    border
                    border-slate-100
                    rounded-2xl
                    px-5
                    py-4
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-primary" />

                  <span className="font-medium text-[#081B44]">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div
              className="
                absolute
                -inset-4
                rounded-[36px]
                bg-gradient-to-br
                from-primary/20
                to-transparent
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                shadow-2xl
                h-[500px]
              "
            >
              <img
                src={cur.image}
                alt={cur.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/5
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  bg-white/95
                  backdrop-blur
                  rounded-2xl
                  px-5
                  py-4
                  shadow-lg
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-1">
                  Specialized Procedure
                </p>

                <h4 className="font-semibold text-[#081B44]">
                  {cur.title}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEET DOCTOR ---------------- */
function MeetDoctor() {
  const stats = [
    {
      icon: ShieldCheck,
      value: "12+ yrs",
      label: "Clinical experience",
    },
    {
      icon: ClipboardCheck,
      value: "5,000+",
      label: "Procedures performed",
    },
    {
      icon: Clock3,
      value: "24×7",
      label: "Stroke availability",
    },
    {
      icon: Globe,
      value: "Global",
      label: "Trained across Paris, Seoul, India",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-[#F8FBFF]"
    >
      {/* Decorative Circles */}
      <div className="absolute -right-60 bottom-0 w-[700px] h-[700px] rounded-full border border-primary/10" />
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] rounded-full border border-primary/10" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

  <div className="grid grid-cols-1 lg:grid-cols-[620px_1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
<div className="relative">

  {/* Mobile Quote */}
  <div className="block lg:hidden mb-6">
    <div className="bg-white rounded-2xl p-5 shadow-md">
      <p className="text-primary text-3xl mb-2">"</p>

      <p className="text-sm text-slate-700">
        Precision imaging.
        Better patient outcomes.
      </p>

      <div className="w-10 h-1 bg-primary rounded-full mt-3" />
    </div>
  </div>

  {/* Main Card */}
  <div
    className="
      bg-[#EAF3FF]
      rounded-[32px]
      lg:rounded-[40px]
      h-[520px]
      lg:h-[820px]
      relative
      overflow-hidden
      shadow-xl
    "
  >
    {/* Dots */}
    <div
      className="
        absolute
        top-8
        left-8
        lg:top-20
        lg:left-16
        grid
        grid-cols-5
        gap-3
        lg:gap-4
      "
    >
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-primary/50"
        />
      ))}
    </div>

    {/* Circle */}
    <div
      className="
        absolute
        left-1/2
        top-[130px]
        lg:top-[180px]
        -translate-x-1/2
        w-[280px]
        h-[280px]
        lg:w-[520px]
        lg:h-[520px]
        rounded-full
        bg-gradient-to-b
        from-[#D7E7FF]
        to-[#BFD8FF]
      "
    />

    {/* Desktop Quote Card */}
    <div
      className="
        hidden
        lg:block
        absolute
        left-6
        top-[220px]
        bg-white
        rounded-[28px]
        p-8
        w-[180px]
        shadow-lg
        z-20
      "
    >
      <div className="text-primary text-6xl leading-none mb-4">
        "
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        Precision imaging.
        Better patient outcomes.
      </p>

      <div className="w-12 h-1 bg-primary rounded-full mt-6" />
    </div>

    {/* Doctor Image */}
    <img
      src={aboutImg}
      alt="Dr. Mandeep"
      className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-24
        lg:bottom-36
        w-[260px]
        lg:w-[520px]
        object-contain
        z-10
      "
    />

    {/* Bottom Specialty Card */}
    <div
      className="
        absolute
        bottom-4
        left-4
        right-4
        lg:bottom-12
        lg:left-10
        lg:right-10
        bg-white
        rounded-[24px]
        lg:rounded-[28px]
        p-4
        lg:p-6
        shadow-lg
        flex
        gap-4
        items-center
        z-20
      "
    >
      <div
        className="
          h-12
          w-12
          lg:h-16
          lg:w-16
          rounded-full
          bg-primary/10
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <Brain className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
      </div>

      <div>
        <h4
          className="
            text-base
            lg:text-xl
            font-semibold
            text-primary
          "
        >
          Interventional Neuroradiologist
        </h4>

        <p
          className="
            text-xs
            lg:text-base
            text-slate-600
            mt-1
          "
        >
          Focused on minimally invasive treatments
          with maximum impact.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* RIGHT SIDE */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary" />

        
            </div>

            <h2 className="font-display text-[50px] leading-[0.92] font-bold text-[#081B44]">
              Meet
              <br />
              Dr. Mandeep Sagar
            </h2>

            {/* Blue Accent */}
            <div className="w-[320px] h-[5px] bg-primary rounded-full mt-4 mb-8" />

            <p className="text-[24px] leading-relaxed text-slate-600 max-w-[720px] mb-12">
              Dr. Mandeep is an interventional neuroradiologist
              dedicated to treating brain and spine vascular disease
              through tiny pinhole catheters — preserving
              neurological function with the precision of
              modern imaging.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-[28px] p-6 shadow-md border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold text-[#081B44]">
                        {item.value}
                      </h3>

                      <p className="text-slate-600">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <div className="h-1 w-28 bg-primary rounded-full ml-[72px]" />
                </div>
              ))}
            </div>

            <a
              href="#journey"
              className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-10 py-5 text-lg font-semibold hover:bg-primary/90 transition"
            >
              Learn more
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- JOURNEY TIMELINE ---------------- */
function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-24 lg:py-32 bg-[#EAF3FF]"
    >
      {/* Background Elements */}
      <div className="absolute left-[-250px] top-20 w-[700px] h-[700px] rounded-full border border-primary/10" />
      <div className="absolute right-[-250px] bottom-0 w-[700px] h-[700px] rounded-full border border-primary/10" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-20 max-w-4xl">
          

          <h2 className="font-display text-6xl lg:text-5xl leading-[0.92] font-normal">
              Professional
           
              <span className="text-primary"> Journey </span>
            </h2>

          <p className="mt-8 text-xl text-slate-600 max-w-2xl">
            A continuous path of learning, mentorship and international
            exposure dedicated to advancing neurovascular care.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-5">
            {journey.map((j, i) => (
              <div
                key={j.title}
                className={`relative ${
                  i % 2 === 0
                    ? "lg:pr-10"
                    : "lg:pl-10 lg:mt-10"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`
                    hidden lg:flex
                    absolute
                    top-1/2
                    -translate-y-1/2
                    h-6
                    w-6
                    rounded-full
                    bg-primary
                    border-4
                    border-white
                    shadow-lg
                    z-20
                    ${
                      i % 2 === 0
                        ? "right-[-60px]"
                        : "left-[-60px]"
                    }
                  `}
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    p-5
                    lg:p-6
                    border
                    border-slate-100
                    shadow-lg
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                >
                  {/* Large Background Number */}
                  <div
                    className="
                      absolute
                      right-5
                      bottom-[-10px]
                      text-[110px]
                      font-bold
                      text-slate-100
                      leading-none
                      select-none
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex items-start gap-5 relative z-10">
                    {/* Icon */}
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <j.icon className="h-8 w-8 text-primary" />
                    </div>

                    <div>
                      <p className="text-primary text-xs uppercase tracking-[0.25em] mb-2 font-semibold">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>

                      <h3 className="text-2xl lg:text-3xl font-bold text-[#081B44]">
                        {j.title}
                      </h3>

                      <p className="text-slate-500 mt-2 text-base">
                        {j.note}
                      </p>

                      <div className="w-20 h-1 bg-primary rounded-full mt-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEDIA ---------------- */
function Media() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            SECTION 08
          </p>

          <h2 className="font-display text-5xl lg:text-6xl leading-[0.92] text-[#081B44]">
            Media & Recognition.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {media.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-white
                border
                border-slate-200
                overflow-hidden
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src={m.image}
                  alt={m.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      h-20
                      w-20
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Play
                      className="
                        h-8
                        w-8
                        text-primary
                        fill-primary
                        ml-1
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p
                  className="
                    text-primary
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    mb-4
                  "
                >
                  {m.source}
                </p>

                <h3
                  className="
                    text-[28px]
                    leading-[1.05]
                    font-bold
                    text-[#081B44]
                    mb-6
                  "
                >
                  {m.title}
                </h3>

                <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                  <span
                    className="
                      text-primary
                      uppercase
                      tracking-[0.2em]
                      text-xs
                      font-semibold
                    "
                  >
                    Watch Video
                  </span>

                  <ArrowRight
                    className="
                      h-5
                      w-5
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
function Stories() {
  const [idx, setIdx] = useState(0);
  return (
    <section id="stories" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.02] max-w-2xl">
            Patient stories — before, treatment, recovery.
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => setIdx((i) => (i - 1 + stories.length) % stories.length)}
              className="h-14 w-14 rounded-full bg-background grid place-items-center hover:bg-background/70 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % stories.length)}
              className="h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className={`rounded-3xl p-8 transition-all ${
                i === idx ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              <div className="aspect-video rounded-2xl bg-foreground/90 grid place-items-center mb-6 relative overflow-hidden">
                <Play className="h-10 w-10 text-background" />
              </div>
              <p className="text-lg leading-relaxed mb-6">"{s.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-lg">{s.name}</p>
                  <p className="text-sm opacity-75">{s.condition}</p>
                </div>
                <div className="flex gap-1.5 text-xs font-semibold uppercase tracking-wider">
                  <span className="opacity-75">Before</span>
                  <span>·</span>
                  <span className="opacity-75">Treat</span>
                  <span>·</span>
                  <span>Recovery</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3">Section 10</p>
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.02]">
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-3xl bg-surface overflow-hidden">
                <button
                  className="w-full text-left flex items-center justify-between gap-6 px-6 lg:px-8 py-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-lg lg:text-xl font-display font-bold">{f.q}</span>
                  <span className="h-10 w-10 rounded-full bg-background grid place-items-center shrink-0">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 lg:px-8 pb-7 text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATIONS ---------------- */
function Locations() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3">Section 11</p>
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.02]">Consultation locations.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {locations.map((l) => (
            <div key={l.city} className="rounded-3xl bg-background p-8">
              <MapPin className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-2xl font-display font-bold mb-1">{l.city}</h3>
              <p className="text-muted-foreground mb-4">{l.hospital}</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold">
                {l.day}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 lg:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-5">Section 12</p>
              <h2 className="text-5xl lg:text-7xl font-display font-bold leading-[0.95] mb-6">
                Need a second <br /> opinion?
              </h2>
              <p className="text-lg text-background/70 max-w-md">
                Share your scans, talk to Dr. Mandeep, and walk in knowing exactly what your options are.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition"
              >
                Book Consultation <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-8 py-5 text-base font-semibold hover:bg-background/90 transition"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src={consultImg} alt="" className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
              <div>
                <h3 className="font-display text-2xl font-bold">Dr. Mandeep Sagar</h3>
                <p className="text-muted-foreground text-sm">Interventional Neuroradiologist</p>
              </div>
            </div>
            <div className="flex gap-3">
              {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-12 w-12 rounded-full bg-background grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 text-sm">
              <div>
                <h4 className="font-display font-bold mb-4">Care</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#conditions">Conditions</a></li>
                  <li><a href="#treatments">Treatments</a></li>
                  <li><a href="#stories">Stories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold mb-4">About</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#about">Dr. Mandeep</a></li>
                  <li><a href="#journey">Journey</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#contact">Book</a></li>
                  <li><a href="tel:+919999999999">Phone</a></li>
                  <li><a href="https://wa.me/919999999999">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <h3 className="text-4xl lg:text-5xl font-display font-bold leading-[1.02] mb-8">
              Lets connect <br /> with me
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 rounded-full bg-background p-2">
              <input
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 outline-none text-sm"
                type="email"
              />
              <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Mandeep Sagar. All rights reserved.</p>
          <p>For medical emergencies, dial your local emergency number immediately.</p>
        </div>
      </div>
    </footer>
  );
}
