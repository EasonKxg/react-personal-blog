import request from "services";

export function getData() {
  request.get({
    url: "/test"
  })
}