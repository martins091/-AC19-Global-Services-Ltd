import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Calendar, Clock, User, ArrowRight, TrendingUp, BookOpen, Target, Lightbulb, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsInsights() {
  const featuredArticle = {
    title: "The Future of Digital Transformation in Nigerian Organizations",
    excerpt: "Exploring emerging trends, challenges, and opportunities in the Nigerian digital landscape as organizations accelerate their technology adoption.",
    author: "AC19 Research Team",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Digital Transformation",
    image: "featured-article-placeholder"
  };

  const articles = [
    {
      title: "Cybersecurity Best Practices for Nigerian Businesses",
      excerpt: "Essential security measures every organization should implement to protect against evolving cyber threats.",
      author: "Security Team",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      type: "Article"
    },
    {
      title: "ERP Implementation Success Story: Manufacturing Company Case Study",
      excerpt: "How we helped a leading Nigerian manufacturer streamline operations and increase efficiency by 40%.",
      author: "Implementation Team",
      date: "January 5, 2024",
      readTime: "5 min read",
      category: "Case Study",
      type: "Case Study"
    },
    {
      title: "Cloud Migration Strategies for African Enterprises",
      excerpt: "A comprehensive guide to successful cloud adoption in the African business environment.",
      author: "Cloud Solutions Team",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Cloud Computing",
      type: "Guide"
    },
    {
      title: "The Rise of EdTech in Nigerian Universities",
      excerpt: "How educational institutions are leveraging technology to enhance learning outcomes and student engagement.",
      author: "Education Solutions Team",
      date: "December 20, 2023",
      readTime: "6 min read",
      category: "Education Technology",
      type: "Industry Report"
    },
    {
      title: "Mobile Banking Revolution: Lessons from Nigerian Fintech",
      excerpt: "Analyzing the rapid growth of mobile banking solutions and their impact on financial inclusion.",
      author: "Fintech Research",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Financial Technology",
      type: "Research"
    },
    {
      title: "Government Digital Services: Building Citizen-Centric Platforms",
      excerpt: "Best practices for developing user-friendly government services that improve citizen satisfaction.",
      author: "Public Sector Team",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Government Technology",
      type: "Best Practices"
    }
  ];

  const categories = [
    "All Categories",
    "Digital Transformation",
    "Cybersecurity", 
    "Cloud Computing",
    "Education Technology",
    "Financial Technology",
    "Government Technology",
    "Case Studies",
    "Industry Reports"
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: "Market Trends",
      description: "Stay ahead with the latest technology trends affecting Nigerian businesses",
      count: "25+ Reports"
    },
    {
      icon: BookOpen,
      title: "Best Practices",
      description: "Learn from proven methodologies and implementation strategies",
      count: "40+ Guides"
    },
    {
      icon: Target,
      title: "Case Studies",
      description: "Real-world success stories from our client implementations",
      count: "15+ Studies"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Explore emerging technologies and their business applications",
      count: "30+ Articles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="news-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="news-title">
                News & <span className="text-shimmer">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="news-subtitle">
                Stay informed with the latest technology trends, industry insights, best practices, and success stories 
                from the African technology landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search articles and insights..."
                      className="pl-10 py-3"
                      data-testid="search-input"
                    />
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3" data-testid="button-newsletter">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-background" data-testid="featured-article">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card rounded-2xl shadow-xl overflow-hidden fade-in-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/30 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                        <BookOpen className="w-16 h-16 text-primary" />
                      </div>
                      <div className="text-lg font-semibold text-foreground">Featured Article</div>
                    </div>
                  </div>
                  <div className="p-12">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {featuredArticle.category}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="featured-title">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="featured-excerpt">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group" data-testid="button-read-featured">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Categories */}
        <section className="py-20 bg-muted/30" data-testid="insights-categories">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="insights-title">
                Knowledge Hub
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="insights-subtitle">
                Explore our comprehensive collection of technology insights and resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon;
                const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : index === 2 ? "fade-in-up-delay-2" : "fade-in-up-delay-3";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 text-center ${animationDelay}`} data-testid={`insight-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`insight-title-${index}`}>
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`insight-description-${index}`}>
                      {insight.description}
                    </p>
                    <div className="text-primary font-medium text-sm" data-testid={`insight-count-${index}`}>
                      {insight.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter and Articles */}
        <section className="py-20 bg-background" data-testid="articles-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Filter Bar */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 fade-in-up">
                <h2 className="text-3xl font-bold text-foreground" data-testid="articles-title">
                  Latest Articles & Insights
                </h2>
                <div className="flex items-center space-x-4">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <select className="bg-card border border-border rounded-lg px-4 py-2 text-foreground" data-testid="category-filter">
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => {
                  const animationDelay = index % 3 === 0 ? "fade-in-up" : index % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                  return (
                    <article key={index} className={`bg-card rounded-xl shadow-lg card-hover border border-border/50 overflow-hidden ${animationDelay}`} data-testid={`article-card-${index}`}>
                      <div className="bg-gradient-to-br from-primary/10 to-accent/20 h-48 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/60" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium" data-testid={`article-category-${index}`}>
                            {article.category}
                          </span>
                          <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs" data-testid={`article-type-${index}`}>
                            {article.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3 hover:text-primary transition-colors" data-testid={`article-title-${index}`}>
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`article-excerpt-${index}`}>
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group" data-testid={`article-read-${index}`}>
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Load More */}
              <div className="text-center mt-12 fade-in-up">
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-load-more">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30" data-testid="newsletter-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="newsletter-title">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay-1" data-testid="newsletter-description">
                Subscribe to our newsletter to receive the latest technology trends, industry insights, and best practices 
                directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto fade-in-up-delay-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                  data-testid="newsletter-email"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}