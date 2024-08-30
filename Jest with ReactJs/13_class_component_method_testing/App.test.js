import renderer from "react-test-renderer";
import Users from "./Users";

test('class component method testing 1', () => { 
  const componentData = renderer.create(<Users />).getInstance();
  console.log(componentData);
  expect(componentData.getUserList1()).toMatch("user list")
 })
test('class component method testing 2', () => { 
  const componentData = renderer.create(<Users />).getInstance();
  console.log(componentData);
  expect(componentData.getUserList2("a")).toMatch("a")
 })