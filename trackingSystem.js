function main() {
  //Create your constructor funtion with the name Shipment
  function Shipment(id, location, destination, status, resources) {
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources || [];

    //Add the updateStatusAndResources using the object prototype
    Shipment.prototype.updateStatusAndResources = function (sta, arr) {
      this.status = sta;
      this.resources = [...arr];
    };

    //Add the assignResource methods through Object prototype
    Shipment.prototype.assignResources = function (...resArr) {
      this.resources.push(...resArr);
    };
  }

  //Create the object literal with the name TrackingSystem
  const TrackingSystem = {
    shipments: [],
    updateStatus: (id, sta) => {
      console.log(`tracked shipments: ${this.shipments}`);
      if (this.shipments !== undefined) {
        const shObj = this.shipments.find((shp) => shp.id === id);
        if (shObj) {
          shObj.status = sta;
        } else {
          console.log(`Shipment with ID ${id} not found.`);
        }
      }
    },
    viewShipment: function (shipmentID) {
      if (this.shipments !== undefined) {
        const shObj = this.shipments.find((shp) => shp.id === shipmentID);
        if (shObj) {
          const { id, location, destination, status, resources } = shObj;
          console.log(`Shipment ID: ${id}`);
          console.log(`Location: ${location}`);
          console.log(`Destination: ${destination}`);
          console.log(`Status: ${status}`);
          console.log(`Resources: ${resources.join(", ")}`);
        } else {
          console.log(`Shipment with ID ${id} not found.`);
        }
      }
    },
  };

  // return { Shipment, TrackingSystem };
  //do not modify any other code.

  const shipment1 = new Shipment(
    "12345",
    "New York",
    "Los Angeles",
    "En route",
    ["Driver", "Truck"]
  );
  // console.log(shipment1);
  // console.log(shipment1.resources);
  shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
  shipment1.assignResources("Worker", "Pallets");
  // console.log(shipment1);
  // console.log(shipment1.resources);

  console.log(TrackingSystem);
  // TrackingSystem.viewShipment("12345");

  const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
    "Forklift",
  ]);
  shipment2.updateStatusAndResources("In transit", ["Driver"]);
  shipment2.assignResources("Worker", "Pallets");

  TrackingSystem.shipments.push(shipment1, shipment2);
  console.log(TrackingSystem);
  console.log(TrackingSystem.shipments);
  console.log(typeof TrackingSystem.shipments);
  TrackingSystem.updateStatus("12345", "Delivered");
  TrackingSystem.viewShipment("12345");
}

main();
