import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Melodia() {
  const courses = [
    {
      id: 1,
      track: "Foundation Course",
      description:
        "This is a beginner-friendly program that builds essential digital skills, covering computer basics, internet fundamentals, productivity tools (Word, Excel, PowerPoint), and AI productivity tools. It's ideal for learners with little or no prior experience.",
      duration: "5 weeks",
      cost: "N150,000",
    },
    {
      id: 2,
      track: "Web Development (Front-End)",
      description:
        "Students are trained to design and build visually appealing, responsive, and interactive user interfaces. The module covers essential front-end technologies including HTML5, CSS, Bootstrap, and JavaScript.",
      duration: "15 weeks",
      cost: "N300,000",
    },
    {
      id: 3,
      track: "App Development (Back-End)",
      description:
        "The students learn how to design and build robust, data-driven applications. The module covers database management and connectivity, focusing on MySQL, Java Programming, and JDBC, enabling students to develop secure, efficient, and scalable applications.",
      duration: "15 weeks",
      cost: "N300,000",
    },
    {
      id: 4,
      track: "Software Engineering",
      description:
        "This pathway delivers comprehensive training across the full software development lifecycle, equipping learners with practical skills in Frontend Development (HTML, CSS, Bootstrap, JavaScript, MERNstack frameworks), Backend Development (server-side programming, Java, databases, APIs, Spring Framework and cloud integration), and Mobile Development (Flutter (Android and iOS) app development, cross-platform frameworks).",
      duration: "15 Months",
      cost: "N1,750,000",
    },
    {
      id: 5,
      track: "FullStack with Java Technologies",
      description:
        "This learning pathway provides comprehensive training in Java for both desktop and web applications. It covers Swing for building rich graphical user interfaces and dives into enterprise-level development with J2EE technologies such as Spring, Servlets, and JSP, equipping learners with the skills to design, develop, and deploy robust enterprise-based solutions.",
      duration: "12 months",
      cost: "N1,000,000",
    },
    {
      id: 6,
      track: "FullStack with MERN Stack Framework",
      description:
        "Designed for those pursuing full-stack web development with a focus on JavaScript-based technologies. Students learn MERN (MongoDB, Express, React, Node.js) stacks to create dynamic web applications.",
      duration: "7 months",
      cost: "N650,000",
    },
    {
      id: 7,
      track: "Data Analytics",
      description:
        "Students gain practical skills in analyzing, interpreting, and deriving insights from data using a combination of tools and programming languages. The module covers Excel, Power BI, Tableau, MySQL, Python Programming, and Machine Learning, delivered through hands-on projects that replicate real-world business and industry scenarios.",
      duration: "6 months",
      cost: "N750,000",
    },
    {
      id: 8,
      track: "Product Design",
      description:
        "Focused on UX/UI fundamentals, this course teaches learners to create digital products using Figma, Miro, Sketch, and Adobe XD—emphasizing design thinking and usability.",
      duration: "10 weeks",
      cost: "N300,000",
    },
  ];

  const programFeatures = [
    {
      icon: Award,
      title: "Career Placement",
      description: "Internship and job pathways with partner companies",
    },
    {
      icon: Users,
      title: "Industry Mentorship",
      description: "Collaborative research labs and expert guidance",
    },
    {
      icon: BookOpen,
      title: "Local Impact",
      description: "Capstone projects addressing African challenges",
    },
    {
      icon: CheckCircle,
      title: "Hands-on Learning",
      description: "Project-based experiences with real-world simulations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Empower Your Future with{" "}
              <span className="text-primary">Melodia</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cutting-edge training to equip you with digital skills for the
              modern workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-xl shadow-md"
              >
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold rounded-xl"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {course.track}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="flex items-center gap-1">
                      ⏳ {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      💰 {course.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Program Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {programFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Our Impact Across Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Melodia Coding Academy has trained and mentored hundreds of
              learners, helping them transition from knowledge to impactful
              careers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Students Trained", icon: Users },
                { number: "50+", label: "Partner Companies", icon: TrendingUp },
                { number: "15+", label: "Countries Served", icon: MapPin },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
