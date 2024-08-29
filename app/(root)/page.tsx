import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
  const loggedIn = {
    firstName: "Anthony",
    lastName: "Volquez",
    email: "admin@example.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and trransactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.32}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 100 }, { currentBalance: 1203 }]}
      />
    </section>
  );
}
