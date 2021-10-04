// Java: Exception
// JavaScript: Error

// Error(Exception) Handling:try -> catch -> finally
{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'down',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      console.log(this.client.tryConnect());
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to use
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
