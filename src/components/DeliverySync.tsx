import orderDemo from "../assets/order-demo.mp4";
import menuDemo from "../assets/menu-demo.mp4";

export default function DeliverySync() {
  return (
    <div className="p-4">
      <div>
        <div className="text-2xl p-2">Overview</div>
        <div className="p-2">
          A custom Shopify embedded app designed for retail merchants to
          automate menu syncing, inventory updates, and order management between
          Shopify and Uber Eats.
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Problem</div>
        <div className="p-2">
          <div>
            Uber Eats currently does not have a automated solution to upload
            menu and inventory management, which results in
          </div>
          <br />
          <ul className="list-disc list-inside">
            <li>High manual effort for merchants with thousands of SKUs</li>
            <li>Frequent stock-outs and customer calls for substitution</li>
            <li>Poor customer experience and wasted time</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Key Features</div>
        <div className="p-2">
          <ul className="list-disc list-inside">
            <li>Shopify to Uber Eats Menu Sync</li>
            <li>Price Markup Shopfy Items by Categories</li>
            <li>Real-Time Inventory Sync</li>
            <li>Auto Order Acceptance</li>
            <li>Shopify Order Creation</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Who Benefits</div>
        <div className="p-2">
          <ul className="list-disc list-inside">
            <li>Retailers stores</li>
            <li>Shopify merchants expanding to Uber Eats</li>
            <li>Businesses with fast-moving, high-volume inventory</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Impact</div>
        <div className="p-2">
          <ul className="list-disc list-inside">
            <li>Reduced merchant effort from hours per week to minutes</li>
            <li>Improved customer satisfaction with fewer stock outs</li>
            <li>Price consitency on both platforms</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Whats Next?</div>
        <div className="p-2">
          <ul className="list-disc list-inside">
            <li>Bufixes.</li>
            <li>
              UI imporvements by adding filtering options on the orders and menu
              pages.
            </li>
            <li>Price markup for each Category.</li>
            <li>Auto accept orders when item is in stock.</li>
            <li>Real time Shopify Inventory Sync.</li>
            <li>
              Integrate Doordash ordering and menu management with Shopify.
            </li>
            <li>
              Make App Public on Shopify App Store so more merchants can use it.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-2xl p-2">Demo video</div>
        <div className="p-2">
          <div className="p-2">
            <div className="text-lg">Order Creation</div>
            <video
              width="640"
              height="360"
              controls
              autoPlay
              muted
              loop
              style={{ borderRadius: "8px" }}
            >
              <source src={orderDemo} type="video/mp4" />
            </video>
          </div>
          <div className="p-2">
            <div className="text-lg">Menu Push</div>
            <video
              width="640"
              height="360"
              controls
              autoPlay
              muted
              loop
              style={{ borderRadius: "8px" }}
            >
              <source src={menuDemo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
