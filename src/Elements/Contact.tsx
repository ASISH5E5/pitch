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
    <div className="w-full max-h-screen bg-gray-50 py-2 pb-4 dark:bg-black">
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-1 dark:text-white">Any Queries?</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            
            <span>Let's Connect.</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-start justify-center">
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
          <div className="w-5/6  md:w-4/12 ">
            <Card className="bg-white shadow-xl h-92 dark:bg-black">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 dark:bg-black rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 dark:bg-black rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="What's your email?"
                      className="w-full p-3 dark:bg-black rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your questions..."
                      rows={4}
                      className="w-full p-3 rounded-lg dark:bg-black border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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