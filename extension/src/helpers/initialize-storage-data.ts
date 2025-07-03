import { storage, constants } from ".";
import { Tool } from "../types";

const defaultServices: Tool[] = [
	new Tool("grayscale", "Grayscale", "Grayscale"),
	new Tool("dyslexic", "Dyslexic Font", "Dyslexic Font"),
	// new Tool("bionic", "Bionic Reading", "Bionic Reading"),
];

export const initializeData = async () => {
	if (!(await storage.get(constants.Storage.Tools))) {
		await storage.set(constants.Storage.Tools, defaultServices)
	}
};

export const updateData = async () => {
	return await storage.get(constants.Storage.Tools).then((services: Tool[]) => {
		defaultServices.forEach(defaultService => {
			const service = services.find(service => defaultService.id === service.id);
			if (!service) {
				services.push(defaultService);
			}
		});

		services.forEach(service => {
			if (!defaultServices.some(defaultService => defaultService.id === service.id)) {
				services = services.filter(s => s.id !== service.id);
			}
		});

		storage.set(constants.Storage.Tools, services);
	});
};
