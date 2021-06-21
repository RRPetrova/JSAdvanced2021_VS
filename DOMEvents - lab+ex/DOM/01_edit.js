function edit(reference, match, replacer) {
    const matcher = new RegExp(match, 'g');
    const toBeRepl = reference.textContent.replace(matcher, replacer);
    reference.textContent = toBeRepl;
}