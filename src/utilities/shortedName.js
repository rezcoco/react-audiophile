function shortedName(name) {
    const index = name.lastIndexOf(" ")
    let sliced = name.substring(0, index)

    sliced = sliced
        .replace(/mark/i, "MK")
        .replace(/wireless/i, "")
        .trim()

    return sliced
}

export default shortedName