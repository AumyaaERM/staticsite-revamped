import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, TrendingUp, Award } from 'lucide-react';

export const ExecutiveCoaching: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: <Users className="w-10 h-10" style={{ color: '#4F63D2' }} />,
      title: 'Leadership Development',
      description: 'Build authentic leadership presence and inspire high-performing teams',
      bgColor: '#D6DFFF'
    },
    {
      icon: <Brain className="w-10 h-10" style={{ color: '#E8A830' }} />,
      title: 'Strategic Thinking',
      description: 'Develop visionary thinking and strategic decision-making capabilities',
      bgColor: '#FFF2D6'
    },
    {
      icon: <TrendingUp className="w-10 h-10" style={{ color: '#4CAF50' }} />,
      title: 'Performance Optimization',
      description: 'Maximize your executive effectiveness and organizational impact',
      bgColor: '#D6F5D6'
    },
    {
      icon: <Award className="w-10 h-10" style={{ color: '#E57373' }} />,
      title: 'Executive Presence',
      description: 'Cultivate commanding presence and influential communication skills',
      bgColor: '#FFDCDC'
    }
  ];

  const coachStats = [
    {
      title: 'Fellow Chartered Accountant/ICF Certified Coach',
      circleColor: '#B3D9FF'
    },
    {
      title: 'Creator of Transformative Transitions Framework',
      circleColor: '#FFF2B3'
    },
    {
      title: '1000+ coaching hours',
      circleColor: '#C8E6C9'
    },
    {
      title: '40+ years in corporate leadership',
      circleColor: '#FFCDD2'
    }
  ];

  const programs = [
    {
      image: '/images/coaching/stone.png',
      title: 'General Coaching & Mentoring Programs',
      description: 'Our Executive Coaching & Mentoring programs empower you to lead with confidence and resilience. Whether you\'re navigating career transitions or stepping into leadership, we offer personalized coaching, leadership development, work-life balance strategies, and succession planning support to help you thrive.'
    },
    {
      image: '/images/coaching/program-women.png',
      title: 'Empowering Women\'s Return to Work Coaching Program',
      description: 'Re-entering the workforce after a career break can feel overwhelming, but you don\'t have to do it alone. Our program is designed to help women rebuild confidence, refine career goals, and successfully transition back to professional life.\n\nWith personalized coaching, interactive workshops, and practical strategies, we address key challenges such as overcoming skill gaps, managing work-life balance, and navigating workplace biases. Whether you need support in career planning, confidence-building, or leadership growth, we provide the tools and guidance to help you succeed.'
    }
  ];

  const testimonials = [
    {
      text: "Manjula mam has been a catalyst in my transition from director to partner, helping me step into leadership. Her deep insights, thoughtful coaching, and unwavering belief in my potential has brought the best out of me. One thing she always reminded me of - \"be the best possible version of yourself\" and this has been my guiding light and now my mantra which I am passing along to my teammates. She has helped me not just grow in title but also the way I lead.",
      author: "Neha Malhotra",
      position: "Audit & Assurance Partner, Deloitte Haskins & Sells LLP"
    },
    {
      text: "My coaching experience with Manjula Mam was a transformative experience. The guidance she provided was instrumental in my journey to becoming a partner. I became more adept at communicating, understood my role more clearly, and embraced continuous self-improvement because of our coaching sessions. Most significantly, I experienced a powerful mindset shift—cultivating a more open and positive outlook that has truly accelerated my professional growth.",
      author: "Kanav Gakhar",
      position: "Audit & Assurance Partner, Deloitte Haskins & Sells LLP"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-16 px-8 md:px-12" style={{ background: '#FCD421' }}>
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-3 rounded-full text-[16px] font-semibold" style={{
              background: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Professional Development
            </span>
          </div>

          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-[56px] md:text-[72px] leading-tight font-bold mb-6" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              lineHeight: '1.1'
            }}>
              Executive Coaching
            </h1>

            <h2 className="text-[32px] md:text-[40px] font-bold mb-6" style={{
              fontFamily: 'Georgia, serif',
              color: '#000000',
              lineHeight: '1.3'
            }}>
              Nurturing Leaders, Shaping Futures
            </h2>

            <p className="text-[18px] md:text-[20px] leading-relaxed mb-8 max-w-3xl" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              lineHeight: '1.6'
            }}>
              Unlock your executive potential with personalized coaching designed to elevate your leadership skills, strategic thinking, and organizational impact.
            </p>

            <Link 
              to="/contact"
              className="px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg inline-block" 
              style={{
                background: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: '#000000',
                textDecoration: 'none'
              }}
            >
              Start Your Journey
            </Link>
          </div>

          {/* Image */}
          <div className="mt-12 rounded-3xl p-8" style={{
            background: '#fcde47'
          }}>
            <img 
              src="/images/coaching/executive-coaching-hero.png" 
              alt="Executive Coaching Session"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Our Coaching Services */}
      <div className="py-16 px-8 md:px-12" style={{ background: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[44px] md:text-[52px] font-bold text-center mb-4" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000'
          }}>
            Our Coaching Services
          </h2>

          <p className="text-[17px] text-center mb-16 max-w-3xl mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            lineHeight: '1.6'
          }}>
            Comprehensive executive coaching programs tailored to your leadership development needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-10 rounded-3xl text-center transition-all hover:shadow-xl"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'
                }}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{
                  background: service.bgColor
                }}>
                  {service.icon}
                </div>

                <h3 className="text-[24px] font-bold mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  {service.title}
                </h3>

                <p className="text-[16px]" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Executive Coach */}
      <div className="py-16 px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16" style={{
            border: '4px solid #FCD421',
            background: '#FFFFFF'
          }}>
            <div className="mb-8">
              <span className="inline-block px-6 py-3 rounded-full text-[15px] font-bold" style={{
                background: '#FCD421',
                fontFamily: 'Inter, sans-serif',
                color: '#000000'
              }}>
                About Coach
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Content */}
              <div>
                <h2 className="text-[40px] md:text-[48px] font-bold mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000',
                  lineHeight: '1.2'
                }}>
                  Meet Our Executive Coach
                </h2>

                <h3 className="text-[32px] md:text-[40px] font-bold mb-6" style={{
                  fontFamily: 'Georgia, serif',
                  color: '#E8A830'
                }}>
                  Manjula Banerji
                </h3>

                <p className="text-[16px] leading-relaxed mb-6" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000',
                  lineHeight: '1.7',
                  textAlign: 'justify'
                }}>
                  With over 40 years of corporate experience, <strong>Manjula Banerji</strong> is a professionally certified executive coach (ICF-PCC) and the author of <em>The Coaching Advantages in the New-Age Workplace</em>. She is a Fellow Member of the Institute of Chartered Accountants of India and a former Audit & Assurance Partner and Board Member at Deloitte Haskins & Sells LLP. During her tenure, she led audits for major Indian and multinational clients across the manufacturing, automotive, and consumer sectors.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {coachStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex-shrink-0 mt-1"
                        style={{
                          background: stat.circleColor
                        }}
                      />
                      <span className="text-[15px] font-normal leading-relaxed" style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#000000'
                      }}>
                        {stat.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/coaching"
                  className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-yellow-50" 
                  style={{
                    border: '2px solid #FCD421',
                    background: 'transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#000000',
                    textDecoration: 'none'
                  }}
                >
                  Learn More
                </Link>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative" style={{ paddingTop: '20px', paddingRight: '20px' }}>
                  {/* Yellow border box - full rectangle */}
                  <div 
                    className="absolute top-0 left-0 bottom-0 right-0"
                    style={{
                      border: '3px solid #FCD421'
                    }}
                  />
                  {/* Image positioned up and to the right, covering top and right borders */}
                  <img 
                    src="/images/coaching/coach-new.png"
                    alt="Manjula Banerji"
                    className="relative w-full max-w-md"
                    style={{
                      position: 'relative',
                      top: '-35px',
                      right: '-35px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Programs */}
      <div className="py-16 px-8 md:px-12" style={{ background: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[44px] md:text-[52px] font-bold text-center mb-4" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000'
          }}>
            Our Programs
          </h2>

          <p className="text-[17px] text-center mb-12 max-w-3xl mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            lineHeight: '1.6'
          }}>
            Choose from our comprehensive coaching programs designed for different stages of executive development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="relative flex flex-col"
                style={{ height: '800px' }}
              >
                {/* Image */}
                <div className="h-96 overflow-hidden rounded-t-3xl flex-shrink-0">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Text Card */}
                <div 
                  className="relative -mt-20 mx-6 rounded-3xl p-8 hover:shadow-xl transition-shadow flex-grow"
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: '2px solid #FFF4CC'
                  }}
                >
                  <h3 className="text-[26px] md:text-[28px] font-bold mb-4" style={{
                    fontFamily: 'Georgia, serif',
                    color: '#000000',
                    lineHeight: '1.3'
                  }}>
                    {program.title}
                  </h3>

                  <p className="text-[16px] leading-relaxed whitespace-pre-line" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000',
                    lineHeight: '1.7',
                    textAlign: 'justify'
                  }}>
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-8 md:px-12" style={{
        background: 'url(/images/coaching/testimonials-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[48px] md:text-[56px] font-bold text-center mb-16" style={{
            fontFamily: 'Georgia, serif',
            color: '#FFFFFF'
          }}>
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-4 m-4"
                style={{
                  border: '3px dotted #D4A017',
                  borderRadius: '16px'
                }}
              >
                <div 
                  className="p-8 rounded-xl relative"
                  style={{
                    background: '#FCD421'
                  }}
                >
                  <div className="text-[56px] leading-none mb-2" style={{
                    fontFamily: 'Georgia, serif',
                    color: '#000000',
                    fontWeight: 'bold'
                  }}>
                    "
                  </div>

                  <p className="text-[15px] leading-relaxed mb-6 italic" style={{
                    fontFamily: 'Georgia, serif',
                    color: '#000000',
                    lineHeight: '1.7'
                  }}>
                    {testimonial.text}
                  </p>

                  <div className="text-left mb-8">
                    <p className="text-[15px] font-bold mb-1" style={{
                      fontFamily: 'Georgia, serif',
                      color: '#000000'
                    }}>
                      - {testimonial.author}
                    </p>
                    <p className="text-[13px]" style={{
                      fontFamily: 'Georgia, serif',
                      color: '#000000',
                      fontWeight: 400
                    }}>
                      {testimonial.position}
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-8 text-[56px] leading-none" style={{
                    fontFamily: 'Georgia, serif',
                    color: '#000000',
                    fontWeight: 'bold'
                  }}>
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Text */}
            <div className="flex-1">
              <p className="text-[18px] md:text-[20px] mb-4" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                lineHeight: '1.5'
              }}>
                Growth begins when you step outside your comfort zone. Are you ready to transform your leadership journey?
              </p>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 text-[18px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#E8A830',
                  textDecoration: 'underline'
                }}
              >
                <span>🔗</span>
                <span>Start Your Transformation Today</span>
              </Link>
            </div>

            {/* Right Side - Button */}
            <div>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-xl transition-all hover:scale-105"
                style={{
                  border: '1px solid #FCD421',
                  background: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#000000',
                  textDecoration: 'none',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

