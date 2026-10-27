/** A link is live only when it is enabled and has a real destination. */
export function isLive(link) {
  return Boolean(link?.enabled && link?.url)
}

export function findLink(links, id) {
  return links.find((link) => link.id === id)
}
