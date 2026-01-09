import React, { useState } from "react";
import {
  Zap,
  TrendingUp,
  Users,
  Target,
  Trophy,
  Coins,
  ChevronRight,
  Star,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("main");
  const [selectedCategory, setSelectedCategory] = useState("business");

  const upgrades = {
    business: [
      {
        id: 1,
        name: "Crypto Exchange",
        level: 3,
        cost: 2500,
        profit: "+450/h",
        icon: "💱",
      },
      {
        id: 2,
        name: "Mining Farm",
        level: 5,
        cost: 5000,
        profit: "+890/h",
        icon: "⛏️",
      },
      {
        id: 3,
        name: "NFT Gallery",
        level: 1,
        cost: 1200,
        profit: "+200/h",
        icon: "🖼️",
      },
      {
        id: 4,
        name: "DeFi Protocol",
        level: 0,
        cost: 800,
        profit: "+150/h",
        icon: "🏦",
      },
      {
        id: 5,
        name: "DAO Community",
        level: 2,
        cost: 3000,
        profit: "+520/h",
        icon: "🤝",
      },
    ],
    special: [
      {
        id: 6,
        name: "Hamster CEO",
        level: 1,
        cost: 10000,
        profit: "+2000/h",
        icon: "👔",
      },
      {
        id: 7,
        name: "Rocket Launch",
        level: 0,
        cost: 15000,
        profit: "+3500/h",
        icon: "🚀",
      },
      {
        id: 8,
        name: "Diamond Paws",
        level: 2,
        cost: 8000,
        profit: "+1500/h",
        icon: "💎",
      },
    ],
    team: [
      {
        id: 9,
        name: "Marketing Team",
        level: 4,
        cost: 4000,
        profit: "+700/h",
        icon: "📢",
      },
      {
        id: 10,
        name: "Dev Squad",
        level: 3,
        cost: 6000,
        profit: "+950/h",
        icon: "💻",
      },
      {
        id: 11,
        name: "Support Crew",
        level: 2,
        cost: 2000,
        profit: "+350/h",
        icon: "🎧",
      },
    ],
  };

  const buffs = [
    {
      id: 1,
      name: "Turbo Mode",
      duration: "3h",
      multiplier: "x2",
      cost: 1000,
      active: true,
      icon: "⚡",
    },
    {
      id: 2,
      name: "Lucky Strike",
      duration: "6h",
      multiplier: "x1.5",
      cost: 1500,
      active: false,
      icon: "🍀",
    },
    {
      id: 3,
      name: "Mega Boost",
      duration: "1h",
      multiplier: "x5",
      cost: 3000,
      active: false,
      icon: "🔥",
    },
    {
      id: 4,
      name: "Auto Clicker",
      duration: "12h",
      multiplier: "Auto",
      cost: 2500,
      active: false,
      icon: "🤖",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🐹
            </div>
            <div>
              <div className="text-sm text-gray-400">Master Hamster</div>
              <div className="text-xl font-bold">Level 12</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-2xl font-bold">
              <Coins className="w-6 h-6 text-yellow-400" />
              45,230
            </div>
            <div className="text-sm text-gray-400">+1,850/hour</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 shadow-lg sticky top-0 z-10 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("main")}
          className={`flex-1 py-4 font-bold transition-all ${
            activeTab === "main"
              ? "bg-gray-700 text-white border-b-2 border-yellow-400"
              : "text-gray-400"
          }`}
        >
          <div className="text-2xl mb-1">🐹</div>
          Main
        </button>
        <button
          onClick={() => setActiveTab("upgrades")}
          className={`flex-1 py-4 font-bold transition-all ${
            activeTab === "upgrades"
              ? "bg-gray-700 text-white border-b-2 border-yellow-400"
              : "text-gray-400"
          }`}
        >
          <TrendingUp className="w-5 h-5 mx-auto mb-1" />
          Upgrades
        </button>
        <button
          onClick={() => setActiveTab("buffs")}
          className={`flex-1 py-4 font-bold transition-all ${
            activeTab === "buffs"
              ? "bg-gray-700 text-white border-b-2 border-yellow-400"
              : "text-gray-400"
          }`}
        >
          <Zap className="w-5 h-5 mx-auto mb-1" />
          Buffs
        </button>
      </div>

      <div className="max-w-md mx-auto p-4 pb-20">
        {/* Main Tab */}
        {activeTab === "main" && (
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="mb-8 text-center">
              <div className="text-6xl font-bold mb-2">45,230</div>
              <div className="text-gray-400">Total Coins</div>
            </div>

            <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-9xl shadow-2xl border-4 border-gray-600">
              🐹
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 w-full">
              <div className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
                <div className="text-yellow-400 font-bold text-lg">+1</div>
                <div className="text-gray-400 text-xs">Per Tap</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
                <div className="text-green-400 font-bold text-lg">1,850</div>
                <div className="text-gray-400 text-xs">Per Hour</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
                <div className="text-blue-400 font-bold text-lg">12</div>
                <div className="text-gray-400 text-xs">Level</div>
              </div>
            </div>
          </div>
        )}

        {/* Upgrades Tab */}
        {activeTab === "upgrades" && (
          <div>
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory("business")}
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "business"
                    ? "bg-gray-600 text-white shadow-lg border-2 border-yellow-400"
                    : "bg-gray-800 text-gray-400 border border-gray-700"
                }`}
              >
                <Target className="w-4 h-4 inline mr-1" />
                Business
              </button>
              <button
                onClick={() => setSelectedCategory("special")}
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "special"
                    ? "bg-gray-600 text-white shadow-lg border-2 border-yellow-400"
                    : "bg-gray-800 text-gray-400 border border-gray-700"
                }`}
              >
                <Star className="w-4 h-4 inline mr-1" />
                Special
              </button>
              <button
                onClick={() => setSelectedCategory("team")}
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "team"
                    ? "bg-gray-600 text-white shadow-lg border-2 border-yellow-400"
                    : "bg-gray-800 text-gray-400 border border-gray-700"
                }`}
              >
                <Users className="w-4 h-4 inline mr-1" />
                Team
              </button>
            </div>

            <div className="space-y-3">
              {upgrades[selectedCategory].map((upgrade) => (
                <div
                  key={upgrade.id}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 shadow-lg border border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-3xl shadow-md border border-gray-600">
                      {upgrade.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{upgrade.name}</div>
                      <div className="text-sm text-gray-400">
                        Level {upgrade.level}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-yellow-400 font-bold">
                          <Coins className="w-4 h-4 inline" /> {upgrade.cost}
                        </div>
                        <div className="text-green-400 text-sm">
                          {upgrade.profit}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  </div>
                  {upgrade.level > 0 && (
                    <div className="mt-2 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${(upgrade.level / 10) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Buffs Tab */}
        {activeTab === "buffs" && (
          <div>
            <div className="mb-4 bg-gray-800 rounded-2xl p-4 text-center border border-gray-700">
              <Trophy className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
              <div className="font-bold text-lg">Power-Up Your Hamster!</div>
              <div className="text-sm text-gray-400">
                Temporary boosts for maximum profit
              </div>
            </div>

            <div className="space-y-3">
              {buffs.map((buff) => (
                <div
                  key={buff.id}
                  className={`rounded-2xl p-4 shadow-lg border ${
                    buff.active
                      ? "bg-gradient-to-r from-green-800 to-green-900 border-green-600"
                      : "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-md border ${
                        buff.active
                          ? "bg-yellow-400 border-yellow-500"
                          : "bg-gray-700 border-gray-600"
                      }`}
                    >
                      {buff.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-lg">{buff.name}</div>
                        {buff.active && (
                          <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-0.5 rounded-full font-bold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        Duration: {buff.duration}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="text-yellow-400 font-bold text-sm">
                          <Coins className="w-4 h-4 inline" /> {buff.cost}
                        </div>
                        <div className="bg-gray-700 px-2 py-0.5 rounded-full text-xs font-bold border border-gray-600">
                          {buff.multiplier}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  </div>
                  {buff.active && (
                    <div className="mt-3 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: "65%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-4 text-center border border-gray-600">
              <div className="font-bold text-lg mb-2">🎁 Daily Bonus</div>
              <div className="text-sm text-gray-400 mb-3">
                Claim your free boost!
              </div>
              <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full">
                Claim Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
