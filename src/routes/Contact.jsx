export default function Contact() {
    return (
      <div className="tab-content-enter">
        <div className="max-w-md mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 glow-text">聯繫我</h2>
          <form className="code-bg glow-box rounded-xl p-6 space-y-4">
            <input className="w-full rounded-md bg-gray-800 px-3 py-2 outline-none"
                   placeholder="您的姓名" />
            <input className="w-full rounded-md bg-gray-800 px-3 py-2 outline-none"
                   placeholder="Email" type="email" />
            <textarea className="w-full rounded-md bg-gray-800 px-3 py-2 outline-none"
                      rows="5" placeholder="留言內容"></textarea>
            <button type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              送出
            </button>
          </form>
        </div>
      </div>
    );
  }
  