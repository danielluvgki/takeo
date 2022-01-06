function FindProxyForURL(url, host) {
  return "PROXY 192.168.0.2:7890; SOCKS5 192.168.0.2:7891; DIRECT;"
}