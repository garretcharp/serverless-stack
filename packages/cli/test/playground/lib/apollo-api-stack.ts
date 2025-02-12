import * as sst from "@serverless-stack/resources";

export class MainStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const api = new sst.ApolloApi(this, "ApolloApi", {
      cors: true,
      server: "src/lambda.main",
    });

    this.addOutputs({
      Endpoint: api.url,
    });
  }
}
