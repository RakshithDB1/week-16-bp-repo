import { useEffect } from "react";

import { useNavStack } from "../../../../common/Layout/NavStack";
import { SettingsList } from "../../../../common/Settings/List";

export const PreferencesSolana: React.FC = () => {
  const nav = useNavStack();
  const solanaMenuItems = {
    "RPC Connection": {
      onClick: () => nav.push("preferences-solana-rpc-connection"),
    },
    "Confirmation Commitment": {
      onClick: () => nav.push("preferences-solana-commitment"),
    },
    Explorer: {
      onClick: () => nav.push("preferences-solana-explorer"),
    },
  };

  useEffect(() => {
    nav.setTitle("Solana");
  }, [nav]);

  return <SettingsList menuItems={solanaMenuItems} />;
};
