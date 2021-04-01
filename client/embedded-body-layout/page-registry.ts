export type EmbeddedPage = {
	container: React.FunctionComponent;
	path: string;
	capability?: string;
};
class PageRegistry {
	private registry: Record< string, EmbeddedPage > = {};

	registerPage( key: string, page: EmbeddedPage ) {
		this.registry[ key ] = page;
	}

	getPages(): EmbeddedPage[] {
		return Object.keys( this.registry ).map(
			( key ) => this.registry[ key ]
		);
	}
}

export const embeddedPageRegistry = new PageRegistry();
