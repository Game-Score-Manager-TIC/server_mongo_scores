import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements GqlExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = GqlArgumentsHost.create(host);
      const response = exception.getResponse();
      const status = exception.getStatus();
  
      // Devuelve solo el mensaje de error
      return {
        message: typeof response === 'string' ? response : response['message'],
      };
    }
  }
  