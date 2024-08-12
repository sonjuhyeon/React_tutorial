CREATE TABLE task (
    _id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    isCompleted BOOLEAN NOT NULL DEFAULT false,
    isImportant BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId TEXT NOT NULL
);

INSERT INTO task (_id, title, description, date, isCompleted, isImportant, userId) VALUES ('1234', '할일1', '할일1설명', '2024-08-01', false, false, 'juhyeon')

select * from task

-- 특정사용자 데이터 조회
select * from task where userId = "juhyeon"