import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Eyebrow text */}
          <p className="text-sm font-medium text-primary">
            INTRODUCING OUR PLATFORM
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl">
            Transform Your Workflow with
            <span className="text-primary"> AI-Powered</span> Solutions
          </h1>
          
          {/* Subheading */}
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Streamline your processes, boost productivity, and achieve more with our innovative SaaS platform. Experience the future of work today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {/* Replace with actual company logos */}
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
