import TimeTableOTL from "./components/time_table_otl";
import ResizablePannel from "./components/resizable_panel";
import HiddenScrollbar from "./components/HiddenScrollbar";
import SortableLectureList from "./components/sortable_lecture_list";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f0f0] p-8 flex items-center justify-center">
      {/* 스크롤바 숨김 컴포넌트 */}
      <HiddenScrollbar />
      
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-[#fffafa] border-b border-pink-100 mb-2">
          <h1 className="text-2xl font-semibold text-gray-800">Homework3</h1>
          <p className="text-sm text-gray-600">NextJS Seminar</p>
        </div>

        <div className="h-[600px]">
          <ResizablePannel
            leftPanel={<TimeTableOTL />}
            rightPanel={
              <SortableLectureList />
            }
            initialWidth={600}
          />
        </div>

        <div className="p-4 bg-[#fffafa] border-t border-pink-100 mt-2 text-center text-sm text-gray-500">
          © 2025 SPARCS killerwhale
        </div>
      </div>
    </div>
  );
};

export default Page;
