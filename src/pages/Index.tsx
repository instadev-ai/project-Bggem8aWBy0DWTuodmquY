import { HeroSection } from '../components/sections/hero-section';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Everything you need to scale
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
              Powerful features to help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Loved by businesses worldwide
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
              See what our customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-500 dark:text-gray-400 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 mr-3" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 md:text-xl">
              Join thousands of companies already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data
const features = [
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Get deep insights into your business with real-time analytics and custom reports.'
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Automate repetitive tasks and workflows with our intelligent AI system.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance features.'
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team with real-time collaboration tools.'
  },
  {
    icon: '📱',
    title: 'Mobile Access',
    description: 'Access your dashboard and tools from anywhere with our mobile app.'
  },
  {
    icon: '🔄',
    title: 'Integration Ready',
    description: 'Connect with your favorite tools through our extensive API and webhooks.'
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
  { value: '10k+', label: 'Customers' },
  { value: '140+', label: 'Countries' }
];

const testimonials = [
  {
    quote: 'This platform has transformed how we handle our business operations. The automation features alone have saved us countless hours.',
    author: 'Sarah Johnson',
    role: 'CEO at TechCorp'
  },
  {
    quote: 'The analytics capabilities are incredible. We\'re now making data-driven decisions with confidence.',
    author: 'Michael Chen',
    role: 'CTO at DataFlow'
  },
  {
    quote: 'Outstanding customer support and a product that just keeps getting better. Couldn\'t be happier!',
    author: 'Emily Rodriguez',
    role: 'Operations Director'
  }
];

export default Index;
