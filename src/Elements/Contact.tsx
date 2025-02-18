import { Card, CardContent } from '@/components/ui/card';



const ContactUs = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    alert('Message sent successfully!');
    e.target.reset();
  };


  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Any Queries?</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>Gummalur</span>
            <span>|</span>
           
            <span>:</span>
            <span>Andhra Pradesh, India.</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 items-start justify-center">
          {/* Left side - Illustration */}
          <div className="w-full md:w-5/12">
            <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 150 L350 150 L200 250 Z" fill="none" stroke="#4F46E5" strokeWidth="2"/>
              <path d="M75 100 L325 100 L200 200 Z" fill="none" stroke="#4F46E5" strokeWidth="2"/>
              <rect x="100" y="120" width="200" height="100" fill="none" stroke="#4F46E5" strokeWidth="2"/>
              <line x1="100" y1="120" x2="200" y2="220" stroke="#4F46E5" strokeWidth="2"/>
              <line x1="300" y1="120" x2="200" y2="220" stroke="#4F46E5" strokeWidth="2"/>
            </svg>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full md:w-5/12">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="What's your email?"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your questions..."
                      rows={4}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactUs;