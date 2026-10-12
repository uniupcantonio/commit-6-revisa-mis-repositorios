import { BaseEntity } from '../domain/model/base-entity';
import { BaseResource, BaseResponse } from './base-response';

/**
 * Assembler contract that maps resources and responses into domain entities and back.
 * @author Carlos Céspedes
 */
export interface BaseAssembler<
  TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse,
> {
  toEntityFromResource(resource: TResource): TEntity;

  toResourceFromEntity(entity: TEntity): TResource;

  toEntitiesFromResponse(response: TResponse): TEntity[];
}
