import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import User from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }
}