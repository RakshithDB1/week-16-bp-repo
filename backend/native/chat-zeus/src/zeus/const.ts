/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Int_comparison_exp: {},
  String_comparison_exp: {},
  barters: {
    chat_barter_metadata: {
      distinct_on: "chat_barter_metadata_select_column",
      order_by: "chat_barter_metadata_order_by",
      where: "chat_barter_metadata_bool_exp",
    },
    room_active_chat_mappings: {
      distinct_on: "room_active_chat_mapping_select_column",
      order_by: "room_active_chat_mapping_order_by",
      where: "room_active_chat_mapping_bool_exp",
    },
  },
  barters_bool_exp: {
    _and: "barters_bool_exp",
    _not: "barters_bool_exp",
    _or: "barters_bool_exp",
    chat_barter_metadata: "chat_barter_metadata_bool_exp",
    id: "Int_comparison_exp",
    on_chain_state: "String_comparison_exp",
    room_active_chat_mappings: "room_active_chat_mapping_bool_exp",
    room_id: "String_comparison_exp",
    state: "String_comparison_exp",
    user1_offers: "String_comparison_exp",
    user2_offers: "String_comparison_exp",
  },
  barters_constraint: "enum" as const,
  barters_inc_input: {},
  barters_insert_input: {
    chat_barter_metadata: "chat_barter_metadata_arr_rel_insert_input",
    room_active_chat_mappings: "room_active_chat_mapping_arr_rel_insert_input",
  },
  barters_obj_rel_insert_input: {
    data: "barters_insert_input",
    on_conflict: "barters_on_conflict",
  },
  barters_on_conflict: {
    constraint: "barters_constraint",
    update_columns: "barters_update_column",
    where: "barters_bool_exp",
  },
  barters_order_by: {
    chat_barter_metadata_aggregate: "chat_barter_metadata_aggregate_order_by",
    id: "order_by",
    on_chain_state: "order_by",
    room_active_chat_mappings_aggregate:
      "room_active_chat_mapping_aggregate_order_by",
    room_id: "order_by",
    state: "order_by",
    user1_offers: "order_by",
    user2_offers: "order_by",
  },
  barters_pk_columns_input: {},
  barters_select_column: "enum" as const,
  barters_set_input: {},
  barters_stream_cursor_input: {
    initial_value: "barters_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  barters_stream_cursor_value_input: {},
  barters_update_column: "enum" as const,
  barters_updates: {
    _inc: "barters_inc_input",
    _set: "barters_set_input",
    where: "barters_bool_exp",
  },
  chat_barter_metadata_aggregate_order_by: {
    avg: "chat_barter_metadata_avg_order_by",
    count: "order_by",
    max: "chat_barter_metadata_max_order_by",
    min: "chat_barter_metadata_min_order_by",
    stddev: "chat_barter_metadata_stddev_order_by",
    stddev_pop: "chat_barter_metadata_stddev_pop_order_by",
    stddev_samp: "chat_barter_metadata_stddev_samp_order_by",
    sum: "chat_barter_metadata_sum_order_by",
    var_pop: "chat_barter_metadata_var_pop_order_by",
    var_samp: "chat_barter_metadata_var_samp_order_by",
    variance: "chat_barter_metadata_variance_order_by",
  },
  chat_barter_metadata_arr_rel_insert_input: {
    data: "chat_barter_metadata_insert_input",
    on_conflict: "chat_barter_metadata_on_conflict",
  },
  chat_barter_metadata_avg_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_bool_exp: {
    _and: "chat_barter_metadata_bool_exp",
    _not: "chat_barter_metadata_bool_exp",
    _or: "chat_barter_metadata_bool_exp",
    barter: "barters_bool_exp",
    barter_id: "Int_comparison_exp",
    chat: "chats_bool_exp",
    chat_client_generated_uuid: "String_comparison_exp",
  },
  chat_barter_metadata_constraint: "enum" as const,
  chat_barter_metadata_insert_input: {
    barter: "barters_obj_rel_insert_input",
    chat: "chats_obj_rel_insert_input",
  },
  chat_barter_metadata_max_order_by: {
    barter_id: "order_by",
    chat_client_generated_uuid: "order_by",
  },
  chat_barter_metadata_min_order_by: {
    barter_id: "order_by",
    chat_client_generated_uuid: "order_by",
  },
  chat_barter_metadata_on_conflict: {
    constraint: "chat_barter_metadata_constraint",
    update_columns: "chat_barter_metadata_update_column",
    where: "chat_barter_metadata_bool_exp",
  },
  chat_barter_metadata_order_by: {
    barter: "barters_order_by",
    barter_id: "order_by",
    chat: "chats_order_by",
    chat_client_generated_uuid: "order_by",
  },
  chat_barter_metadata_select_column: "enum" as const,
  chat_barter_metadata_stddev_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_stddev_pop_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_stddev_samp_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_stream_cursor_input: {
    initial_value: "chat_barter_metadata_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  chat_barter_metadata_stream_cursor_value_input: {},
  chat_barter_metadata_sum_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_update_column: "enum" as const,
  chat_barter_metadata_updates: {
    where: "chat_barter_metadata_bool_exp",
  },
  chat_barter_metadata_var_pop_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_var_samp_order_by: {
    barter_id: "order_by",
  },
  chat_barter_metadata_variance_order_by: {
    barter_id: "order_by",
  },
  chat_media_messages_aggregate_order_by: {
    avg: "chat_media_messages_avg_order_by",
    count: "order_by",
    max: "chat_media_messages_max_order_by",
    min: "chat_media_messages_min_order_by",
    stddev: "chat_media_messages_stddev_order_by",
    stddev_pop: "chat_media_messages_stddev_pop_order_by",
    stddev_samp: "chat_media_messages_stddev_samp_order_by",
    sum: "chat_media_messages_sum_order_by",
    var_pop: "chat_media_messages_var_pop_order_by",
    var_samp: "chat_media_messages_var_samp_order_by",
    variance: "chat_media_messages_variance_order_by",
  },
  chat_media_messages_arr_rel_insert_input: {
    data: "chat_media_messages_insert_input",
    on_conflict: "chat_media_messages_on_conflict",
  },
  chat_media_messages_avg_order_by: {
    id: "order_by",
  },
  chat_media_messages_bool_exp: {
    _and: "chat_media_messages_bool_exp",
    _not: "chat_media_messages_bool_exp",
    _or: "chat_media_messages_bool_exp",
    chat: "chats_bool_exp",
    id: "Int_comparison_exp",
    media_kind: "String_comparison_exp",
    media_link: "String_comparison_exp",
    message_client_generated_uuid: "String_comparison_exp",
  },
  chat_media_messages_constraint: "enum" as const,
  chat_media_messages_inc_input: {},
  chat_media_messages_insert_input: {
    chat: "chats_obj_rel_insert_input",
  },
  chat_media_messages_max_order_by: {
    id: "order_by",
    media_kind: "order_by",
    media_link: "order_by",
    message_client_generated_uuid: "order_by",
  },
  chat_media_messages_min_order_by: {
    id: "order_by",
    media_kind: "order_by",
    media_link: "order_by",
    message_client_generated_uuid: "order_by",
  },
  chat_media_messages_on_conflict: {
    constraint: "chat_media_messages_constraint",
    update_columns: "chat_media_messages_update_column",
    where: "chat_media_messages_bool_exp",
  },
  chat_media_messages_order_by: {
    chat: "chats_order_by",
    id: "order_by",
    media_kind: "order_by",
    media_link: "order_by",
    message_client_generated_uuid: "order_by",
  },
  chat_media_messages_pk_columns_input: {},
  chat_media_messages_select_column: "enum" as const,
  chat_media_messages_set_input: {},
  chat_media_messages_stddev_order_by: {
    id: "order_by",
  },
  chat_media_messages_stddev_pop_order_by: {
    id: "order_by",
  },
  chat_media_messages_stddev_samp_order_by: {
    id: "order_by",
  },
  chat_media_messages_stream_cursor_input: {
    initial_value: "chat_media_messages_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  chat_media_messages_stream_cursor_value_input: {},
  chat_media_messages_sum_order_by: {
    id: "order_by",
  },
  chat_media_messages_update_column: "enum" as const,
  chat_media_messages_updates: {
    _inc: "chat_media_messages_inc_input",
    _set: "chat_media_messages_set_input",
    where: "chat_media_messages_bool_exp",
  },
  chat_media_messages_var_pop_order_by: {
    id: "order_by",
  },
  chat_media_messages_var_samp_order_by: {
    id: "order_by",
  },
  chat_media_messages_variance_order_by: {
    id: "order_by",
  },
  chats: {
    chat_barter_metadata: {
      distinct_on: "chat_barter_metadata_select_column",
      order_by: "chat_barter_metadata_order_by",
      where: "chat_barter_metadata_bool_exp",
    },
    chat_media_messages: {
      distinct_on: "chat_media_messages_select_column",
      order_by: "chat_media_messages_order_by",
      where: "chat_media_messages_bool_exp",
    },
    secure_transfer_transactions: {
      distinct_on: "secure_transfer_transactions_select_column",
      order_by: "secure_transfer_transactions_order_by",
      where: "secure_transfer_transactions_bool_exp",
    },
    simple_transactions: {
      distinct_on: "simple_transactions_select_column",
      order_by: "simple_transactions_order_by",
      where: "simple_transactions_bool_exp",
    },
  },
  chats_bool_exp: {
    _and: "chats_bool_exp",
    _not: "chats_bool_exp",
    _or: "chats_bool_exp",
    chat_barter_metadata: "chat_barter_metadata_bool_exp",
    chat_media_messages: "chat_media_messages_bool_exp",
    client_generated_uuid: "String_comparison_exp",
    created_at: "timestamptz_comparison_exp",
    id: "Int_comparison_exp",
    message: "String_comparison_exp",
    message_kind: "String_comparison_exp",
    parent_client_generated_uuid: "String_comparison_exp",
    room: "String_comparison_exp",
    secure_transfer_transactions: "secure_transfer_transactions_bool_exp",
    simple_transactions: "simple_transactions_bool_exp",
    type: "String_comparison_exp",
    username: "String_comparison_exp",
    uuid: "String_comparison_exp",
  },
  chats_constraint: "enum" as const,
  chats_insert_input: {
    chat_barter_metadata: "chat_barter_metadata_arr_rel_insert_input",
    chat_media_messages: "chat_media_messages_arr_rel_insert_input",
    created_at: "timestamptz",
    secure_transfer_transactions:
      "secure_transfer_transactions_arr_rel_insert_input",
    simple_transactions: "simple_transactions_arr_rel_insert_input",
  },
  chats_obj_rel_insert_input: {
    data: "chats_insert_input",
    on_conflict: "chats_on_conflict",
  },
  chats_on_conflict: {
    constraint: "chats_constraint",
    update_columns: "chats_update_column",
    where: "chats_bool_exp",
  },
  chats_order_by: {
    chat_barter_metadata_aggregate: "chat_barter_metadata_aggregate_order_by",
    chat_media_messages_aggregate: "chat_media_messages_aggregate_order_by",
    client_generated_uuid: "order_by",
    created_at: "order_by",
    id: "order_by",
    message: "order_by",
    message_kind: "order_by",
    parent_client_generated_uuid: "order_by",
    room: "order_by",
    secure_transfer_transactions_aggregate:
      "secure_transfer_transactions_aggregate_order_by",
    simple_transactions_aggregate: "simple_transactions_aggregate_order_by",
    type: "order_by",
    username: "order_by",
    uuid: "order_by",
  },
  chats_select_column: "enum" as const,
  chats_stream_cursor_input: {
    initial_value: "chats_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  chats_stream_cursor_value_input: {
    created_at: "timestamptz",
  },
  chats_update_column: "enum" as const,
  cursor_ordering: "enum" as const,
  mutation_root: {
    delete_room_active_chat_mapping: {
      where: "room_active_chat_mapping_bool_exp",
    },
    delete_room_active_chat_mapping_by_pk: {},
    insert_barters: {
      objects: "barters_insert_input",
      on_conflict: "barters_on_conflict",
    },
    insert_barters_one: {
      object: "barters_insert_input",
      on_conflict: "barters_on_conflict",
    },
    insert_chat_barter_metadata: {
      objects: "chat_barter_metadata_insert_input",
      on_conflict: "chat_barter_metadata_on_conflict",
    },
    insert_chat_barter_metadata_one: {
      object: "chat_barter_metadata_insert_input",
      on_conflict: "chat_barter_metadata_on_conflict",
    },
    insert_chat_media_messages: {
      objects: "chat_media_messages_insert_input",
      on_conflict: "chat_media_messages_on_conflict",
    },
    insert_chat_media_messages_one: {
      object: "chat_media_messages_insert_input",
      on_conflict: "chat_media_messages_on_conflict",
    },
    insert_chats: {
      objects: "chats_insert_input",
      on_conflict: "chats_on_conflict",
    },
    insert_chats_one: {
      object: "chats_insert_input",
      on_conflict: "chats_on_conflict",
    },
    insert_room_active_chat_mapping: {
      objects: "room_active_chat_mapping_insert_input",
      on_conflict: "room_active_chat_mapping_on_conflict",
    },
    insert_room_active_chat_mapping_one: {
      object: "room_active_chat_mapping_insert_input",
      on_conflict: "room_active_chat_mapping_on_conflict",
    },
    insert_secure_transfer_transactions: {
      objects: "secure_transfer_transactions_insert_input",
      on_conflict: "secure_transfer_transactions_on_conflict",
    },
    insert_secure_transfer_transactions_one: {
      object: "secure_transfer_transactions_insert_input",
      on_conflict: "secure_transfer_transactions_on_conflict",
    },
    insert_simple_transactions: {
      objects: "simple_transactions_insert_input",
      on_conflict: "simple_transactions_on_conflict",
    },
    insert_simple_transactions_one: {
      object: "simple_transactions_insert_input",
      on_conflict: "simple_transactions_on_conflict",
    },
    update_barters: {
      _inc: "barters_inc_input",
      _set: "barters_set_input",
      where: "barters_bool_exp",
    },
    update_barters_by_pk: {
      _inc: "barters_inc_input",
      _set: "barters_set_input",
      pk_columns: "barters_pk_columns_input",
    },
    update_barters_many: {
      updates: "barters_updates",
    },
    update_chat_barter_metadata: {
      where: "chat_barter_metadata_bool_exp",
    },
    update_chat_barter_metadata_many: {
      updates: "chat_barter_metadata_updates",
    },
    update_chat_media_messages: {
      _inc: "chat_media_messages_inc_input",
      _set: "chat_media_messages_set_input",
      where: "chat_media_messages_bool_exp",
    },
    update_chat_media_messages_by_pk: {
      _inc: "chat_media_messages_inc_input",
      _set: "chat_media_messages_set_input",
      pk_columns: "chat_media_messages_pk_columns_input",
    },
    update_chat_media_messages_many: {
      updates: "chat_media_messages_updates",
    },
    update_room_active_chat_mapping: {
      _inc: "room_active_chat_mapping_inc_input",
      _set: "room_active_chat_mapping_set_input",
      where: "room_active_chat_mapping_bool_exp",
    },
    update_room_active_chat_mapping_by_pk: {
      _inc: "room_active_chat_mapping_inc_input",
      _set: "room_active_chat_mapping_set_input",
      pk_columns: "room_active_chat_mapping_pk_columns_input",
    },
    update_room_active_chat_mapping_many: {
      updates: "room_active_chat_mapping_updates",
    },
    update_secure_transfer_transactions: {
      _inc: "secure_transfer_transactions_inc_input",
      _set: "secure_transfer_transactions_set_input",
      where: "secure_transfer_transactions_bool_exp",
    },
    update_secure_transfer_transactions_by_pk: {
      _inc: "secure_transfer_transactions_inc_input",
      _set: "secure_transfer_transactions_set_input",
      pk_columns: "secure_transfer_transactions_pk_columns_input",
    },
    update_secure_transfer_transactions_many: {
      updates: "secure_transfer_transactions_updates",
    },
    update_simple_transactions: {
      _inc: "simple_transactions_inc_input",
      _set: "simple_transactions_set_input",
      where: "simple_transactions_bool_exp",
    },
    update_simple_transactions_by_pk: {
      _inc: "simple_transactions_inc_input",
      _set: "simple_transactions_set_input",
      pk_columns: "simple_transactions_pk_columns_input",
    },
    update_simple_transactions_many: {
      updates: "simple_transactions_updates",
    },
  },
  order_by: "enum" as const,
  query_root: {
    barters: {
      distinct_on: "barters_select_column",
      order_by: "barters_order_by",
      where: "barters_bool_exp",
    },
    barters_by_pk: {},
    chat_barter_metadata: {
      distinct_on: "chat_barter_metadata_select_column",
      order_by: "chat_barter_metadata_order_by",
      where: "chat_barter_metadata_bool_exp",
    },
    chat_media_messages: {
      distinct_on: "chat_media_messages_select_column",
      order_by: "chat_media_messages_order_by",
      where: "chat_media_messages_bool_exp",
    },
    chat_media_messages_by_pk: {},
    chats: {
      distinct_on: "chats_select_column",
      order_by: "chats_order_by",
      where: "chats_bool_exp",
    },
    chats_by_pk: {},
    room_active_chat_mapping: {
      distinct_on: "room_active_chat_mapping_select_column",
      order_by: "room_active_chat_mapping_order_by",
      where: "room_active_chat_mapping_bool_exp",
    },
    room_active_chat_mapping_by_pk: {},
    secure_transfer_transactions: {
      distinct_on: "secure_transfer_transactions_select_column",
      order_by: "secure_transfer_transactions_order_by",
      where: "secure_transfer_transactions_bool_exp",
    },
    secure_transfer_transactions_by_pk: {},
    simple_transactions: {
      distinct_on: "simple_transactions_select_column",
      order_by: "simple_transactions_order_by",
      where: "simple_transactions_bool_exp",
    },
    simple_transactions_by_pk: {},
  },
  room_active_chat_mapping_aggregate_order_by: {
    avg: "room_active_chat_mapping_avg_order_by",
    count: "order_by",
    max: "room_active_chat_mapping_max_order_by",
    min: "room_active_chat_mapping_min_order_by",
    stddev: "room_active_chat_mapping_stddev_order_by",
    stddev_pop: "room_active_chat_mapping_stddev_pop_order_by",
    stddev_samp: "room_active_chat_mapping_stddev_samp_order_by",
    sum: "room_active_chat_mapping_sum_order_by",
    var_pop: "room_active_chat_mapping_var_pop_order_by",
    var_samp: "room_active_chat_mapping_var_samp_order_by",
    variance: "room_active_chat_mapping_variance_order_by",
  },
  room_active_chat_mapping_arr_rel_insert_input: {
    data: "room_active_chat_mapping_insert_input",
    on_conflict: "room_active_chat_mapping_on_conflict",
  },
  room_active_chat_mapping_avg_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_bool_exp: {
    _and: "room_active_chat_mapping_bool_exp",
    _not: "room_active_chat_mapping_bool_exp",
    _or: "room_active_chat_mapping_bool_exp",
    barter: "barters_bool_exp",
    barter_id: "Int_comparison_exp",
    room_id: "String_comparison_exp",
  },
  room_active_chat_mapping_constraint: "enum" as const,
  room_active_chat_mapping_inc_input: {},
  room_active_chat_mapping_insert_input: {
    barter: "barters_obj_rel_insert_input",
  },
  room_active_chat_mapping_max_order_by: {
    barter_id: "order_by",
    room_id: "order_by",
  },
  room_active_chat_mapping_min_order_by: {
    barter_id: "order_by",
    room_id: "order_by",
  },
  room_active_chat_mapping_on_conflict: {
    constraint: "room_active_chat_mapping_constraint",
    update_columns: "room_active_chat_mapping_update_column",
    where: "room_active_chat_mapping_bool_exp",
  },
  room_active_chat_mapping_order_by: {
    barter: "barters_order_by",
    barter_id: "order_by",
    room_id: "order_by",
  },
  room_active_chat_mapping_pk_columns_input: {},
  room_active_chat_mapping_select_column: "enum" as const,
  room_active_chat_mapping_set_input: {},
  room_active_chat_mapping_stddev_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_stddev_pop_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_stddev_samp_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_stream_cursor_input: {
    initial_value: "room_active_chat_mapping_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  room_active_chat_mapping_stream_cursor_value_input: {},
  room_active_chat_mapping_sum_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_update_column: "enum" as const,
  room_active_chat_mapping_updates: {
    _inc: "room_active_chat_mapping_inc_input",
    _set: "room_active_chat_mapping_set_input",
    where: "room_active_chat_mapping_bool_exp",
  },
  room_active_chat_mapping_var_pop_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_var_samp_order_by: {
    barter_id: "order_by",
  },
  room_active_chat_mapping_variance_order_by: {
    barter_id: "order_by",
  },
  secure_transfer_transactions_aggregate_order_by: {
    avg: "secure_transfer_transactions_avg_order_by",
    count: "order_by",
    max: "secure_transfer_transactions_max_order_by",
    min: "secure_transfer_transactions_min_order_by",
    stddev: "secure_transfer_transactions_stddev_order_by",
    stddev_pop: "secure_transfer_transactions_stddev_pop_order_by",
    stddev_samp: "secure_transfer_transactions_stddev_samp_order_by",
    sum: "secure_transfer_transactions_sum_order_by",
    var_pop: "secure_transfer_transactions_var_pop_order_by",
    var_samp: "secure_transfer_transactions_var_samp_order_by",
    variance: "secure_transfer_transactions_variance_order_by",
  },
  secure_transfer_transactions_arr_rel_insert_input: {
    data: "secure_transfer_transactions_insert_input",
    on_conflict: "secure_transfer_transactions_on_conflict",
  },
  secure_transfer_transactions_avg_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_bool_exp: {
    _and: "secure_transfer_transactions_bool_exp",
    _not: "secure_transfer_transactions_bool_exp",
    _or: "secure_transfer_transactions_bool_exp",
    chat: "chats_bool_exp",
    counter: "String_comparison_exp",
    current_state: "String_comparison_exp",
    escrow: "String_comparison_exp",
    final_txn_signature: "String_comparison_exp",
    from: "String_comparison_exp",
    id: "Int_comparison_exp",
    message_client_generated_uuid: "String_comparison_exp",
    message_id: "Int_comparison_exp",
    signature: "String_comparison_exp",
    to: "String_comparison_exp",
  },
  secure_transfer_transactions_constraint: "enum" as const,
  secure_transfer_transactions_inc_input: {},
  secure_transfer_transactions_insert_input: {
    chat: "chats_obj_rel_insert_input",
  },
  secure_transfer_transactions_max_order_by: {
    counter: "order_by",
    current_state: "order_by",
    escrow: "order_by",
    final_txn_signature: "order_by",
    from: "order_by",
    id: "order_by",
    message_client_generated_uuid: "order_by",
    message_id: "order_by",
    signature: "order_by",
    to: "order_by",
  },
  secure_transfer_transactions_min_order_by: {
    counter: "order_by",
    current_state: "order_by",
    escrow: "order_by",
    final_txn_signature: "order_by",
    from: "order_by",
    id: "order_by",
    message_client_generated_uuid: "order_by",
    message_id: "order_by",
    signature: "order_by",
    to: "order_by",
  },
  secure_transfer_transactions_on_conflict: {
    constraint: "secure_transfer_transactions_constraint",
    update_columns: "secure_transfer_transactions_update_column",
    where: "secure_transfer_transactions_bool_exp",
  },
  secure_transfer_transactions_order_by: {
    chat: "chats_order_by",
    counter: "order_by",
    current_state: "order_by",
    escrow: "order_by",
    final_txn_signature: "order_by",
    from: "order_by",
    id: "order_by",
    message_client_generated_uuid: "order_by",
    message_id: "order_by",
    signature: "order_by",
    to: "order_by",
  },
  secure_transfer_transactions_pk_columns_input: {},
  secure_transfer_transactions_select_column: "enum" as const,
  secure_transfer_transactions_set_input: {},
  secure_transfer_transactions_stddev_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_stddev_pop_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_stddev_samp_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_stream_cursor_input: {
    initial_value: "secure_transfer_transactions_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  secure_transfer_transactions_stream_cursor_value_input: {},
  secure_transfer_transactions_sum_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_update_column: "enum" as const,
  secure_transfer_transactions_updates: {
    _inc: "secure_transfer_transactions_inc_input",
    _set: "secure_transfer_transactions_set_input",
    where: "secure_transfer_transactions_bool_exp",
  },
  secure_transfer_transactions_var_pop_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_var_samp_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  secure_transfer_transactions_variance_order_by: {
    id: "order_by",
    message_id: "order_by",
  },
  simple_transactions_aggregate_order_by: {
    avg: "simple_transactions_avg_order_by",
    count: "order_by",
    max: "simple_transactions_max_order_by",
    min: "simple_transactions_min_order_by",
    stddev: "simple_transactions_stddev_order_by",
    stddev_pop: "simple_transactions_stddev_pop_order_by",
    stddev_samp: "simple_transactions_stddev_samp_order_by",
    sum: "simple_transactions_sum_order_by",
    var_pop: "simple_transactions_var_pop_order_by",
    var_samp: "simple_transactions_var_samp_order_by",
    variance: "simple_transactions_variance_order_by",
  },
  simple_transactions_arr_rel_insert_input: {
    data: "simple_transactions_insert_input",
    on_conflict: "simple_transactions_on_conflict",
  },
  simple_transactions_avg_order_by: {
    id: "order_by",
  },
  simple_transactions_bool_exp: {
    _and: "simple_transactions_bool_exp",
    _not: "simple_transactions_bool_exp",
    _or: "simple_transactions_bool_exp",
    client_generated_uuid: "String_comparison_exp",
    id: "Int_comparison_exp",
    txn_signature: "String_comparison_exp",
  },
  simple_transactions_constraint: "enum" as const,
  simple_transactions_inc_input: {},
  simple_transactions_insert_input: {},
  simple_transactions_max_order_by: {
    client_generated_uuid: "order_by",
    id: "order_by",
    txn_signature: "order_by",
  },
  simple_transactions_min_order_by: {
    client_generated_uuid: "order_by",
    id: "order_by",
    txn_signature: "order_by",
  },
  simple_transactions_on_conflict: {
    constraint: "simple_transactions_constraint",
    update_columns: "simple_transactions_update_column",
    where: "simple_transactions_bool_exp",
  },
  simple_transactions_order_by: {
    client_generated_uuid: "order_by",
    id: "order_by",
    txn_signature: "order_by",
  },
  simple_transactions_pk_columns_input: {},
  simple_transactions_select_column: "enum" as const,
  simple_transactions_set_input: {},
  simple_transactions_stddev_order_by: {
    id: "order_by",
  },
  simple_transactions_stddev_pop_order_by: {
    id: "order_by",
  },
  simple_transactions_stddev_samp_order_by: {
    id: "order_by",
  },
  simple_transactions_stream_cursor_input: {
    initial_value: "simple_transactions_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  simple_transactions_stream_cursor_value_input: {},
  simple_transactions_sum_order_by: {
    id: "order_by",
  },
  simple_transactions_update_column: "enum" as const,
  simple_transactions_updates: {
    _inc: "simple_transactions_inc_input",
    _set: "simple_transactions_set_input",
    where: "simple_transactions_bool_exp",
  },
  simple_transactions_var_pop_order_by: {
    id: "order_by",
  },
  simple_transactions_var_samp_order_by: {
    id: "order_by",
  },
  simple_transactions_variance_order_by: {
    id: "order_by",
  },
  subscription_root: {
    barters: {
      distinct_on: "barters_select_column",
      order_by: "barters_order_by",
      where: "barters_bool_exp",
    },
    barters_by_pk: {},
    barters_stream: {
      cursor: "barters_stream_cursor_input",
      where: "barters_bool_exp",
    },
    chat_barter_metadata: {
      distinct_on: "chat_barter_metadata_select_column",
      order_by: "chat_barter_metadata_order_by",
      where: "chat_barter_metadata_bool_exp",
    },
    chat_barter_metadata_stream: {
      cursor: "chat_barter_metadata_stream_cursor_input",
      where: "chat_barter_metadata_bool_exp",
    },
    chat_media_messages: {
      distinct_on: "chat_media_messages_select_column",
      order_by: "chat_media_messages_order_by",
      where: "chat_media_messages_bool_exp",
    },
    chat_media_messages_by_pk: {},
    chat_media_messages_stream: {
      cursor: "chat_media_messages_stream_cursor_input",
      where: "chat_media_messages_bool_exp",
    },
    chats: {
      distinct_on: "chats_select_column",
      order_by: "chats_order_by",
      where: "chats_bool_exp",
    },
    chats_by_pk: {},
    chats_stream: {
      cursor: "chats_stream_cursor_input",
      where: "chats_bool_exp",
    },
    room_active_chat_mapping: {
      distinct_on: "room_active_chat_mapping_select_column",
      order_by: "room_active_chat_mapping_order_by",
      where: "room_active_chat_mapping_bool_exp",
    },
    room_active_chat_mapping_by_pk: {},
    room_active_chat_mapping_stream: {
      cursor: "room_active_chat_mapping_stream_cursor_input",
      where: "room_active_chat_mapping_bool_exp",
    },
    secure_transfer_transactions: {
      distinct_on: "secure_transfer_transactions_select_column",
      order_by: "secure_transfer_transactions_order_by",
      where: "secure_transfer_transactions_bool_exp",
    },
    secure_transfer_transactions_by_pk: {},
    secure_transfer_transactions_stream: {
      cursor: "secure_transfer_transactions_stream_cursor_input",
      where: "secure_transfer_transactions_bool_exp",
    },
    simple_transactions: {
      distinct_on: "simple_transactions_select_column",
      order_by: "simple_transactions_order_by",
      where: "simple_transactions_bool_exp",
    },
    simple_transactions_by_pk: {},
    simple_transactions_stream: {
      cursor: "simple_transactions_stream_cursor_input",
      where: "simple_transactions_bool_exp",
    },
  },
  timestamptz: `scalar.timestamptz` as const,
  timestamptz_comparison_exp: {
    _eq: "timestamptz",
    _gt: "timestamptz",
    _gte: "timestamptz",
    _in: "timestamptz",
    _lt: "timestamptz",
    _lte: "timestamptz",
    _neq: "timestamptz",
    _nin: "timestamptz",
  },
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: "Int",
    refresh: "Boolean",
  },
  barters: {
    chat_barter_metadata: "chat_barter_metadata",
    id: "Int",
    on_chain_state: "String",
    room_active_chat_mappings: "room_active_chat_mapping",
    room_id: "String",
    state: "String",
    user1_offers: "String",
    user2_offers: "String",
  },
  barters_mutation_response: {
    affected_rows: "Int",
    returning: "barters",
  },
  chat_barter_metadata: {
    barter: "barters",
    barter_id: "Int",
    chat: "chats",
    chat_client_generated_uuid: "String",
  },
  chat_barter_metadata_mutation_response: {
    affected_rows: "Int",
    returning: "chat_barter_metadata",
  },
  chat_media_messages: {
    chat: "chats",
    id: "Int",
    media_kind: "String",
    media_link: "String",
    message_client_generated_uuid: "String",
  },
  chat_media_messages_mutation_response: {
    affected_rows: "Int",
    returning: "chat_media_messages",
  },
  chats: {
    chat_barter_metadata: "chat_barter_metadata",
    chat_media_messages: "chat_media_messages",
    client_generated_uuid: "String",
    created_at: "timestamptz",
    id: "Int",
    message: "String",
    message_kind: "String",
    parent_client_generated_uuid: "String",
    room: "String",
    secure_transfer_transactions: "secure_transfer_transactions",
    simple_transactions: "simple_transactions",
    type: "String",
    username: "String",
    uuid: "String",
  },
  chats_mutation_response: {
    affected_rows: "Int",
    returning: "chats",
  },
  mutation_root: {
    delete_room_active_chat_mapping:
      "room_active_chat_mapping_mutation_response",
    delete_room_active_chat_mapping_by_pk: "room_active_chat_mapping",
    insert_barters: "barters_mutation_response",
    insert_barters_one: "barters",
    insert_chat_barter_metadata: "chat_barter_metadata_mutation_response",
    insert_chat_barter_metadata_one: "chat_barter_metadata",
    insert_chat_media_messages: "chat_media_messages_mutation_response",
    insert_chat_media_messages_one: "chat_media_messages",
    insert_chats: "chats_mutation_response",
    insert_chats_one: "chats",
    insert_room_active_chat_mapping:
      "room_active_chat_mapping_mutation_response",
    insert_room_active_chat_mapping_one: "room_active_chat_mapping",
    insert_secure_transfer_transactions:
      "secure_transfer_transactions_mutation_response",
    insert_secure_transfer_transactions_one: "secure_transfer_transactions",
    insert_simple_transactions: "simple_transactions_mutation_response",
    insert_simple_transactions_one: "simple_transactions",
    update_barters: "barters_mutation_response",
    update_barters_by_pk: "barters",
    update_barters_many: "barters_mutation_response",
    update_chat_barter_metadata: "chat_barter_metadata_mutation_response",
    update_chat_barter_metadata_many: "chat_barter_metadata_mutation_response",
    update_chat_media_messages: "chat_media_messages_mutation_response",
    update_chat_media_messages_by_pk: "chat_media_messages",
    update_chat_media_messages_many: "chat_media_messages_mutation_response",
    update_room_active_chat_mapping:
      "room_active_chat_mapping_mutation_response",
    update_room_active_chat_mapping_by_pk: "room_active_chat_mapping",
    update_room_active_chat_mapping_many:
      "room_active_chat_mapping_mutation_response",
    update_secure_transfer_transactions:
      "secure_transfer_transactions_mutation_response",
    update_secure_transfer_transactions_by_pk: "secure_transfer_transactions",
    update_secure_transfer_transactions_many:
      "secure_transfer_transactions_mutation_response",
    update_simple_transactions: "simple_transactions_mutation_response",
    update_simple_transactions_by_pk: "simple_transactions",
    update_simple_transactions_many: "simple_transactions_mutation_response",
  },
  query_root: {
    barters: "barters",
    barters_by_pk: "barters",
    chat_barter_metadata: "chat_barter_metadata",
    chat_media_messages: "chat_media_messages",
    chat_media_messages_by_pk: "chat_media_messages",
    chats: "chats",
    chats_by_pk: "chats",
    room_active_chat_mapping: "room_active_chat_mapping",
    room_active_chat_mapping_by_pk: "room_active_chat_mapping",
    secure_transfer_transactions: "secure_transfer_transactions",
    secure_transfer_transactions_by_pk: "secure_transfer_transactions",
    simple_transactions: "simple_transactions",
    simple_transactions_by_pk: "simple_transactions",
  },
  room_active_chat_mapping: {
    barter: "barters",
    barter_id: "Int",
    room_id: "String",
  },
  room_active_chat_mapping_mutation_response: {
    affected_rows: "Int",
    returning: "room_active_chat_mapping",
  },
  secure_transfer_transactions: {
    chat: "chats",
    counter: "String",
    current_state: "String",
    escrow: "String",
    final_txn_signature: "String",
    from: "String",
    id: "Int",
    message_client_generated_uuid: "String",
    message_id: "Int",
    signature: "String",
    to: "String",
  },
  secure_transfer_transactions_mutation_response: {
    affected_rows: "Int",
    returning: "secure_transfer_transactions",
  },
  simple_transactions: {
    client_generated_uuid: "String",
    id: "Int",
    txn_signature: "String",
  },
  simple_transactions_mutation_response: {
    affected_rows: "Int",
    returning: "simple_transactions",
  },
  subscription_root: {
    barters: "barters",
    barters_by_pk: "barters",
    barters_stream: "barters",
    chat_barter_metadata: "chat_barter_metadata",
    chat_barter_metadata_stream: "chat_barter_metadata",
    chat_media_messages: "chat_media_messages",
    chat_media_messages_by_pk: "chat_media_messages",
    chat_media_messages_stream: "chat_media_messages",
    chats: "chats",
    chats_by_pk: "chats",
    chats_stream: "chats",
    room_active_chat_mapping: "room_active_chat_mapping",
    room_active_chat_mapping_by_pk: "room_active_chat_mapping",
    room_active_chat_mapping_stream: "room_active_chat_mapping",
    secure_transfer_transactions: "secure_transfer_transactions",
    secure_transfer_transactions_by_pk: "secure_transfer_transactions",
    secure_transfer_transactions_stream: "secure_transfer_transactions",
    simple_transactions: "simple_transactions",
    simple_transactions_by_pk: "simple_transactions",
    simple_transactions_stream: "simple_transactions",
  },
  timestamptz: `scalar.timestamptz` as const,
};

export const Ops = {
  mutation: "mutation_root" as const,
  query: "query_root" as const,
  subscription: "subscription_root" as const,
};
