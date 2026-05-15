import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlatformLayout from "./layouts/PlatformLayout.jsx";
import TopicLayout from "./layouts/TopicLayout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import LearnUseReducerIntro from "./pages/topics/use-reducer/LearnUseReducerIntro.jsx";
import LearnUseReducerCompare from "./pages/topics/use-reducer/LearnUseReducerCompare.jsx";
import LearnUseReducerPattern from "./pages/topics/use-reducer/LearnUseReducerPattern.jsx";
import LearnUseReducerForm from "./pages/topics/use-reducer/LearnUseReducerForm.jsx";
import LearnUseReducerAuth from "./pages/topics/use-reducer/LearnUseReducerAuth.jsx";
import LearnUseReducerFetch from "./pages/topics/use-reducer/LearnUseReducerFetch.jsx";
import LearnUseReducerQuiz from "./pages/topics/use-reducer/LearnUseReducerQuiz.jsx";
import RedirectLearn from "./components/RedirectLearn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PlatformLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/topics/use-reducer" element={<TopicLayout topicId="use-reducer" />}>
            <Route index element={<LearnUseReducerIntro />} />
            <Route path="compare" element={<LearnUseReducerCompare />} />
            <Route path="pattern" element={<LearnUseReducerPattern />} />
            <Route path="form" element={<LearnUseReducerForm />} />
            <Route path="auth" element={<LearnUseReducerAuth />} />
            <Route path="fetch" element={<LearnUseReducerFetch />} />
            <Route path="quiz" element={<LearnUseReducerQuiz />} />
          </Route>

          <Route path="/learn/use-reducer/*" element={<RedirectLearn />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
