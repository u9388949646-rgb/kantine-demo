
export default function Home() {
  const menu = [
    { name: "Kanelbolle", price: 25 },
    { name: "Ostesmørbrød", price: 35 },
    { name: "Kaffe", price: 20 },
    { name: "Dagens suppe", price: 55 },
  ];

  return (
    <main className="min-h-screen bg-green-50 p-10 text-gray-900">
      <h1 className="text-4xl font-bold text-green-800">
        Kantine Demo
      </h1>

      <p className="mt-2 text-xl">
        Velkommen til kantinen!
      </p>

      <h2 className="mt-8 text-2xl font-bold">
        Dagens meny
      </h2>

      <div className="mt-4 max-w-lg space-y-3">
        {menu.map((item) => (
          <div
            key={item.name}
            className="flex justify-between rounded-lg bg-white p-4 shadow"
          >
            <span>{item.name}</span>
            <strong>{item.price} kr</strong>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-500">
        Version 1.0
      </p>
    </main>
  );
}
