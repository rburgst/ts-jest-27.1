import * as config from "./config";

const value = config.getBoolean("foo");
if (value) {
  console.log("was true");
} else {
  console.log("was false");
}
