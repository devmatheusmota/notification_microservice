import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['nice-mammoth-13810-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bmljZS1tYW1tb3RoLTEzODEwJIM7b3movWbUxuuANMKk48wt1sSiSSN7vRZMPrE',
          password:
            'dch6jcm-HPO_Xv66pa4tP9o0ya9wcLGY5vXARYS9y9erhQeHBo_CdibNcdud2rCmrqxk5A==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
