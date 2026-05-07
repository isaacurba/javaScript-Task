const order = {
    status: "pending"
}

const { status } = order

if (status === "pending") console.log("processing");
else if (status === "shipped") console.log("shipped");
else if (status === "delivered") console.log("delivered");
