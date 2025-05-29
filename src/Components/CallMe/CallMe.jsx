export default function CallMe() {
  const handleChange = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">contact us.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-gray-600">
                  34 Abdel Aziz Street, El Abaseri, Beni Suef, Egypt
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">Support@yourcompany.com</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold">phone</h4>
                <p className="text-sm text-gray-600">+20 010 3052 8273</p>
              </div>
            </div>
          </div>

          <form className="max-w-3xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={(e) => handleChange(e)}
                className="w-full p-3 rounded-md border border-gray-300"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>
            <textarea
              placeholder="message"
              className="w-full p-3 rounded-md border border-gray-300 h-32 resize-none
"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
            >
              submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
