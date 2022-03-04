import React from "react";
import "./styles.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function App() {
  return (
    <TradingViewWidget
      symbol={"AAPL"}
      theme={Themes.DARK}
      interval="1"
      locale="en"
      timezone="America/New York"
	    withdateranges={true}
      hideSideToolbar={false}
	    enablePublishing={false}
	    allowSymbolChange={true}
      details
      news={["headlines"]}
    />
  );
}
