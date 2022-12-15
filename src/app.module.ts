import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  providers: [],
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
