export const capture = <T extends HTMLInputElement>(node: T, formatFunction: (value: string) => string) => {
	function updateValue(e: Event) {
		node.value = formatFunction(node.value);
	}

	node.addEventListener('input', updateValue);
	node.addEventListener('paste', updateValue);

	// Format on initial hydration
	node.value = formatFunction(node.value);

	return {
		destroy() {
			node.removeEventListener('input', updateValue);
			node.removeEventListener('paste', updateValue);
		}
	};
};
