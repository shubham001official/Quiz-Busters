import React from "react";

const AdminDashboard = () => {
  const menuItems = [
    { title: "Create New Quiz", description: "Build a new quiz from scratch.", icon: "➕" },
    { title: "Ongoing Quizzes", description: "Manage and view active quizzes.", icon: "📋" },
    { title: "Leadership Board", description: "Track top performers and scores.", icon: "📈" },
    { title: "Blacklist Users", description: "Block specific users or emails.", icon: "🚫" },
    { title: "Manage Players", description: "View and manage player details.", icon: "👥" },
    { title: "Review Reports", description: "Analyze quiz performance and reports.", icon: "📑" },
    { title: "Notifications", description: "Send or manage announcements.", icon: "🔔" },
    { title: "Settings", description: "Adjust platform preferences.", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-6">
      <header className="text-center text-white mb-12">
        <h1 className="text-4xl font-bold">Welcome, Shubham!</h1>
        <p className="mt-2 text-lg italic">"Empower quizzes, engage minds."</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="text-purple-600 text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
