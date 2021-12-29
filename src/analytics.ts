function sendAnalytics(data: any) {
  let userName = "Omar";
  console.log("data");
}
sendAnalytics({
  event: "clicked",
  time: new Date().toISOString(),
});
