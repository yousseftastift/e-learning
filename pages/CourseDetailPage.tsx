import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_COURSES, MOCK_TEACHERS, MOCK_TESTIMONIALS } from '../constants';
import { Course, Teacher, Testimonial } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Accordion, { AccordionItem } from '../components/Accordion';
import StarRating from '../components/StarRating';
import CourseCard from '../components/CourseCard';
import { useCart } from '../contexts/CartContext';
import { UserCircleIcon, ClockIconSolid, PlayIcon, CheckCircleIcon, UsersIcon, GlobeAltIcon, TagIcon, LanguageIcon, CalendarDaysIcon, DocumentTextIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from '../components/IconComponents';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { addToCart, isItemInCart } = useCart();
  
  const course = useMemo(() => MOCK_COURSES.find(c => c.id === courseId), [courseId]);
  const instructor = useMemo(() => MOCK_TEACHERS.find(t => t.id === course?.instructorId), [course]);
  const relatedCourses = useMemo(() => MOCK_COURSES.filter(c => c.category === course?.category && c.id !== courseId).slice(0, 3), [course]);
  
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);

  const handleAddToCart = () => {
    if (course) {
      if (!isItemInCart(course.id)) {
        addToCart(course);
        setAddedToCartMessage(true);
        setTimeout(() => setAddedToCartMessage(false), 3000); // Message disappears after 3s
      } else {
        // If item is already in cart, perhaps navigate to cart or show different message
        navigate('/cart');
      }
    }
  };

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Course not found.</h1>
        <Link to="/courses" className="text-primary hover:underline mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }
  
  const courseMeta = [
    { icon: <UsersIcon className="h-5 w-5 text-primary"/>, label: "Level", value: course.level },
    { icon: <ClockIconSolid className="h-5 w-5 text-primary"/>, label: "Duration", value: course.duration },
    { icon: <UserCircleIcon className="h-5 w-5 text-primary"/>, label: "Students", value: `${course.studentsEnrolled.toLocaleString()}` },
    { icon: <LanguageIcon className="h-5 w-5 text-primary"/>, label: "Language", value: course.language },
    { icon: <CalendarDaysIcon className="h-5 w-5 text-primary"/>, label: "Last Updated", value: course.lastUpdated }
  ];

  const itemInCart = isItemInCart(course.id);

  const CartButton = ({ fullWidth = false }) => (
    <Button 
      onClick={handleAddToCart} 
      fullWidth={fullWidth} 
      className="mb-3"
      variant={itemInCart ? 'secondary' : 'primary'}
      leftIcon={itemInCart ? undefined : <ShoppingBagIcon className="h-5 w-5"/>}
    >
      {itemInCart ? 'View Cart' : 'Add to Cart'}
    </Button>
  );

  return (
    <div className="animate-fadeIn">
      {/* Course Header */}
      <header className="bg-neutral-dark text-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <span className="inline-block bg-secondary text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{course.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3">{course.title}</h1>
              <p className="text-lg text-neutral-light mb-4">{course.description}</p>
              <div className="flex items-center space-x-4 mb-4">
                <StarRating rating={course.rating} reviewCount={course.reviewCount} showText />
                {instructor && (
                  <div className="flex items-center">
                    <img src={instructor.imageUrl} alt={instructor.name} className="h-8 w-8 rounded-full mr-2"/>
                    <span>Taught by <Link to={`/teachers/${instructor.id}`} className="font-semibold hover:underline">{instructor.name}</Link></span>
                  </div>
                )}
              </div>
            </div>
            {/* Floating Card for Price & CTA - Desktop */}
            <div className="hidden md:block md:w-1/3 md:pl-12">
                <div className="bg-white p-6 rounded-lg shadow-xl text-neutral-dark sticky top-24">
                    <img src={course.thumbnailUrl} alt={course.title} className="rounded-md mb-4 w-full h-48 object-cover"/>
                    <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-primary">${course.price}</span>
                        {course.originalPrice && <span className="ml-2 text-lg line-through text-neutral">${course.originalPrice}</span>}
                    </div>
                    <CartButton fullWidth />
                    {addedToCartMessage && !itemInCart && <p className="text-xs text-secondary text-center">Added to cart!</p>}
                    <p className="text-xs text-neutral text-center">30-Day Money-Back Guarantee</p>
                </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:space-x-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-4">Course Overview</h2>
              <p className="text-neutral leading-relaxed whitespace-pre-line">{course.overview}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6">What You'll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Key branding concepts", "Effective design principles", "Logo design techniques", "Typography best practices", "Creating brand guidelines", "Market research for branding"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6">Course Content</h2>
              <Accordion>
                {course.syllabus.map((item, index) => (
                  <AccordionItem key={item.id} title={`${item.title} (${item.duration})`} isOpenInitially={index === 0}>
                    <ul className="space-y-3">
                      {item.lessons.map(lesson => (
                        <li key={lesson.id} className="flex items-center justify-between p-3 hover:bg-neutral-light/50 rounded-md">
                          <div className="flex items-center">
                            {lesson.type === 'video' && <PlayIcon className="h-5 w-5 text-primary mr-3" />}
                            {lesson.type === 'reading' && <DocumentTextIcon className="h-5 w-5 text-primary mr-3" />}
                            {lesson.type === 'quiz' && <QuestionMarkCircleIcon className="h-5 w-5 text-primary mr-3" />}
                            <span className="text-sm text-neutral-dark">{lesson.title}</span>
                          </div>
                          <span className="text-xs text-neutral">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {instructor && (
              <section className="mb-12 p-6 bg-white rounded-lg shadow-subtle">
                <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6">About the Instructor</h2>
                <div className="flex items-start space-x-6">
                  <img src={instructor.imageUrl} alt={instructor.name} className="h-24 w-24 rounded-full object-cover"/>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{instructor.name}</h3>
                    <p className="text-sm text-neutral mb-2">{instructor.role}</p>
                    <p className="text-neutral text-sm mb-3">{instructor.bio}</p>
                    <Button to={`/teachers/${instructor.id}`} variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </section>
            )}

            <section className="mb-12">
              <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6">Student Reviews</h2>
               <div className="space-y-6">
                {MOCK_TESTIMONIALS.slice(0,2).map((testimonial: Testimonial) => (
                    <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-subtle">
                        <div className="flex items-center mb-2">
                            <StarRating rating={Math.floor(Math.random() * 2) + 4} /> 
                            <span className="ml-2 text-sm font-semibold text-neutral-dark">Great Course!</span>
                        </div>
                        <p className="text-neutral text-sm mb-3 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="h-8 w-8 rounded-full mr-2 object-cover"/>
                            <span className="text-xs text-neutral-dark font-medium">{testimonial.name} - <span className="text-neutral font-normal">Verified Buyer</span></span>
                        </div>
                    </div>
                ))}
               </div>
            </section>
          </div>

          <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit"> 
            <div className="p-6 bg-white rounded-lg shadow-subtle mb-8">
              <h3 className="text-xl font-semibold font-serif text-neutral-dark mb-4">Course Details</h3>
              <ul className="space-y-3">
                {courseMeta.map(meta => (
                  <li key={meta.label} className="flex items-center text-sm">
                    <span className="mr-3">{meta.icon}</span>
                    <span className="font-medium text-neutral-dark mr-1">{meta.label}:</span>
                    <span className="text-neutral">{meta.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Floating Card for Price & CTA - Mobile/Tablet */}
            <div className="md:hidden bg-white p-6 rounded-lg shadow-xl text-neutral-dark mb-8">
                <img src={course.thumbnailUrl} alt={course.title} className="rounded-md mb-4 w-full h-48 object-cover"/>
                <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                    {course.originalPrice && <span className="ml-2 text-lg line-through text-neutral">${course.originalPrice}</span>}
                </div>
                <CartButton fullWidth />
                {addedToCartMessage && !itemInCart && <p className="text-xs text-secondary text-center mt-2">Added to cart!</p>}
                <p className="text-xs text-neutral text-center mt-2">30-Day Money-Back Guarantee</p>
            </div>
          </aside>
        </div>

        {relatedCourses.length > 0 && (
            <section className="mt-16 pt-12 border-t border-neutral-light">
            <SectionTitle title="Related Courses" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
                ))}
            </div>
            </section>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;