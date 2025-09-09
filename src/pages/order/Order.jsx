import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CoverImg from "../../assets/banner/banner2.jpg";
import Cover from "../../components/shared/cover/Cover";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./orderTab/OrderTab";

const Order = () => {
  const [menu] = useMenu();

  // Tab names that match your DB item names exactly
  const names = [
    "Red Chili Powder",
    "Turmeric Powder",
    "Cumin Seeds",
    "Coriander Powder",
    "Cloves",
    "Cinnamon",
  ];

  const { name } = useParams();
  const initialIndex = names.indexOf(name);
  //   const [tabIndex, setTabIndex] = useState(initialIndex);

  // If no match is found, fallback to first tab (0)
  const [tabIndex, setTabIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );

  // Filtering items from DB
  const RedChili = menu.filter((item) => item.name === "Red Chili Powder");
  const TurmericPowder = menu.filter((item) => item.name === "Turmeric Powder");
  const CuminSeeds = menu.filter((item) => item.name === "Cumin Seeds");
  const CorianderPowder = menu.filter(
    (item) => item.name === "Coriander Powder"
  );
  const Cloves = menu.filter((item) => item.name === "Cloves");
  const Cinnamon = menu.filter((item) => item.name === "Cinnamon");

  return (
    <div>
      <Helmet>
        <title>Moshla House || Order</title>
      </Helmet>
      <Cover img={CoverImg} title="Order Item"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {names.map((tabName, idx) => (
            <Tab key={idx}>{tabName}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <OrderTab items={RedChili} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={TurmericPowder} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={CuminSeeds} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={CorianderPowder} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Cloves} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Cinnamon} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
