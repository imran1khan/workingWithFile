import { useReadMeFileData } from "./hooks/readmeData"

function App() {
  const data = useReadMeFileData();
  return (
    <>
      <div className="flex bg-gray-800 text-white">
        <div className="p-8 w-[50%] bg-[#232336] overflow-hidden overflow-x-scroll">
          <pre className="text-wrap">
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </pre>
        </div>
        <div className="p-8 w-[50%] overflow-hidden overflow-x-scroll">
          <pre className="text-wrap" id="htmlreadmeFile">
          </pre>
        </div>
      </div>
    </>
  )
}

export default App
