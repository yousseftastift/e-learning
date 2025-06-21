
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COURSES, PURCHASED_COURSE_LESSONS } from '../constants';
import { Lesson, Course } from '../types';
import { CheckCircleIcon, PlayIcon, DocumentArrowDownIcon, ChatBubbleLeftEllipsisIcon, ChevronRightIcon, ChevronDownIcon, FilmIcon, DocumentTextIcon, QuestionMarkCircleIcon } from '../components/IconComponents';
import Button from '../components/Button';

const PurchasedCoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = useMemo(() => MOCK_COURSES.find(c => c.id === courseId), [courseId]);

  const [lessons, setLessons] = useState<Lesson[]>(PURCHASED_COURSE_LESSONS);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(lessons[0] || null);
  const [activeTab, setActiveTab] = useState<'overview' | 'qna' | 'resources'>('overview');
  
  // Use course syllabus if available, otherwise fallback to PURCHASED_COURSE_LESSONS
  const courseSyllabusLessons = useMemo(() => {
    if (course && course.syllabus) {
      return course.syllabus.flatMap(module => module.lessons);
    }
    return PURCHASED_COURSE_LESSONS;
  }, [course]);

  useState(() => {
    setLessons(courseSyllabusLessons);
    setCurrentLesson(courseSyllabusLessons[0] || null);
  });


  const totalLessons = lessons.length;
  const completedLessons = lessons.filter(l => l.isCompleted).length;
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const toggleLessonComplete = (lessonId: string) => {
    setLessons(prevLessons =>
      prevLessons.map(l =>
        l.id === lessonId ? { ...l, isCompleted: !l.isCompleted } : l
      )
    );
  };

  if (!course || !currentLesson) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Course or Lesson not found.</h1>
        <Link to="/courses" className="text-primary hover:underline mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video': return <FilmIcon className="h-5 w-5 mr-2 text-primary" />;
      case 'reading': return <DocumentTextIcon className="h-5 w-5 mr-2 text-primary" />;
      case 'quiz': return <QuestionMarkCircleIcon className="h-5 w-5 mr-2 text-primary" />;
      default: return <PlayIcon className="h-5 w-5 mr-2 text-primary" />;
    }
  };


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-light animate-fadeIn">
      {/* Sidebar - Lesson List */}
      <aside className="w-full lg:w-1/4 bg-white p-6 shadow-lg lg:min-h-screen lg:overflow-y-auto">
        <div className="mb-6">
          <Link to={`/courses/${course.id}`} className="text-primary hover:underline font-semibold text-lg">{course.title}</Link>
          <p className="text-sm text-neutral mt-1">Your Progress</p>
          <div className="w-full bg-neutral-200 rounded-full h-2.5 mt-2">
            <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="text-xs text-neutral mt-1">{completedLessons} of {totalLessons} lessons completed</p>
        </div>

        <nav>
          <ul className="space-y-1">
            {lessons.map(lesson => (
              <li key={lesson.id}>
                <button
                  onClick={() => setCurrentLesson(lesson)}
                  className={`w-full flex items-center justify-between p-3 rounded-md text-left text-sm transition-colors duration-200
                    ${currentLesson.id === lesson.id ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-neutral-light/50 text-neutral-dark'}`}
                >
                  <div className="flex items-center">
                    {getLessonIcon(lesson.type)}
                    <span>{lesson.title}</span>
                  </div>
                  {lesson.isCompleted && <CheckCircleIcon className="h-5 w-5 text-secondary flex-shrink-0" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-serif text-neutral-dark mb-2">{currentLesson.title}</h1>
          <p className="text-neutral mb-6">{currentLesson.duration} &bull; {currentLesson.type.charAt(0).toUpperCase() + currentLesson.type.slice(1)}</p>

          {/* Video Player Area / Content Area */}
          <div className="aspect-video bg-neutral-dark rounded-lg shadow-xl mb-8 flex items-center justify-center text-white">
            {currentLesson.type === 'video' ? (
                <PlayIcon className="h-24 w-24 opacity-50" />
            ) : currentLesson.type === 'reading' ? (
                <DocumentTextIcon className="h-24 w-24 opacity-50" />
            ) : (
                <QuestionMarkCircleIcon className="h-24 w-24 opacity-50" />
            )}
            {/* Replace with actual video player or content renderer */}
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <Button variant="outline" size="sm" onClick={() => { /* Previous Lesson Logic */ }}>
              Previous Lesson
            </Button>
            <Button
              onClick={() => toggleLessonComplete(currentLesson.id)}
              variant={currentLesson.isCompleted ? "secondary" : "primary"}
              size="sm"
              leftIcon={currentLesson.isCompleted ? <CheckCircleIcon className="h-5 w-5"/> : undefined}
            >
              {currentLesson.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
            </Button>
            <Button variant="outline" size="sm" onClick={() => { /* Next Lesson Logic */ }}>
              Next Lesson
            </Button>
          </div>


          {/* Tabs for Overview, Q&A, Resources */}
          <div className="bg-white p-6 rounded-lg shadow-subtle">
            <div className="border-b border-neutral-light mb-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['overview', 'qna', 'resources'].map((tabName) => (
                  <button
                    key={tabName}
                    onClick={() => setActiveTab(tabName as 'overview' | 'qna' | 'resources')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === tabName
                        ? 'border-primary text-primary'
                        : 'border-transparent text-neutral hover:text-neutral-dark hover:border-neutral-light'
                      }`}
                  >
                    {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">Lesson Overview</h3>
                <p className="text-neutral">
                  This is a placeholder for the lesson overview. Content for "{currentLesson.title}" would go here. 
                  It might include key learning objectives, a summary of the topic, or important notes.
                  For example, if this were a video lesson, it might be a transcript or summary points. If a reading, it might be the core text.
                </p>
              </div>
            )}

            {activeTab === 'qna' && (
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">Q&A</h3>
                <div className="space-y-4">
                  {/* Placeholder Q&A items */}
                  <div className="bg-neutral-light/50 p-4 rounded-md">
                    <p className="font-medium text-neutral-dark">How do I apply this concept in a real-world scenario?</p>
                    <p className="text-sm text-neutral mt-1">Instructor: Great question! You can apply this by...</p>
                  </div>
                  <div className="bg-neutral-light/50 p-4 rounded-md">
                    <p className="font-medium text-neutral-dark">Can you clarify point 3?</p>
                    <p className="text-sm text-neutral mt-1">Instructor: Certainly, point 3 refers to...</p>
                  </div>
                  <textarea 
                    className="w-full p-2 border border-neutral-light rounded-md mt-4 text-sm"
                    rows={3}
                    placeholder="Ask a question..."
                  ></textarea>
                  <Button size="sm">Submit Question</Button>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">Downloadable Resources</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-3 bg-neutral-light/50 rounded-md hover:bg-neutral-light transition-colors">
                    <div className="flex items-center">
                      <DocumentArrowDownIcon className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm text-neutral-dark">Lesson Slides (PDF)</span>
                    </div>
                    <Button variant="ghost" size="sm">Download</Button>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-neutral-light/50 rounded-md hover:bg-neutral-light transition-colors">
                    <div className="flex items-center">
                      <DocumentArrowDownIcon className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm text-neutral-dark">Exercise Files (ZIP)</span>
                    </div>
                    <Button variant="ghost" size="sm">Download</Button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PurchasedCoursePage;
