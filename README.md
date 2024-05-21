# Student Automation System - NodeJS Backend

## Overview

This repository contains the NodeJS backend services for the Student Automation System, a senior project developed by a team of four Computer Engineering students at Karabuk University. The backend services provide the necessary APIs and database management to support the web and mobile applications, ensuring a seamless and efficient academic experience for both students and lecturers.

## Team Members

- **Mohamad ZUBI** - [GitHub](https://github.com/MOHAMAD-ZUBI)
- **Muhannad SALKINI** - [GitHub](https://github.com/muhannadsalkini)
- **Nisreen BOUTA** - [GitHub](https://github.com/nisreenbouta)
- **Roula KOURANI** - [GitHub](https://github.com/R-Kourani)

## Getting Started

Follow these instructions to set up and run the NodeJS backend services on your local machine for development and testing purposes.

### Prerequisites

- Ensure you have Node.js and npm installed.
- MongoDB installed and running.

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/E-campus-karabuk/NodeJS-Backend.git
   cd NodeJS-Backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**


4. **Run the Server:**
   ```bash
   npm start
   ```

### API Endpoints

- **Authentication:**
  - `GET /api/auth` - Get all users (Admin only)
  - `GET /api/auth/current` - Get current user
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user
  - `GET /api/auth/delete/:id` - Delete a user (Admin only)
  - `PATCH /api/auth/addRole/:id` - Add role to a user (Admin only)
  - `PATCH /api/auth/deleteRole/:id` - Remove role from a user (Admin only)

- **Students:**
  - `GET /api/student/current` - Get current student information
  - `POST /api/student/create` - Create a new student

- **Lecturers:**
  - `GET /api/academician/current` - Get current academician information
  - `POST /api/academician/create` - Create a new academician
  - `GET /api/academician/:id` - Get academician by ID

- **Admins:**
  - `GET /api/admin/getAdmin` - Get admin information
  - `POST /api/admin/create` - Create a new admin

- **Chatbot:**
  - `POST /api/bot/test` - Test chatbot
  - `POST /api/bot/newChat` - Send a new chat message

- **Courses:**
  - `GET /api/course/list` - Get all courses
  - `POST /api/course/uploadNote` - Upload a course note
  - `GET /api/course/:id` - Get course by ID
  - `GET /api/course/notes/:id` - Get course notes by course ID
  - `DELETE /api/course/notes/remove/:id` - Delete a course note by ID
  - `GET /api/course/list/mine` - Get my courses
  - `POST /api/course/create` - Create a new course
  - `PUT /api/course/update/:id` - Update course by ID
  - `DELETE /api/course/delete/:id` - Delete course by ID

- **Departments:**
  - `GET /api/department/list` - Get all departments
  - `GET /api/department/userDepartment` - Get department by user (Authenticated)
  - `GET /api/department/:id` - Get department by ID
  - `POST /api/department/addWorker/:id` - Add worker to department by ID
  - `DELETE /api/department/deleteWorker/:id` - Delete worker from department by ID
  - `POST /api/department/addCorse/:id` - Add course to department by ID
  - `DELETE /api/department/deleteCorse/:id` - Delete course from department by ID
  - `POST /api/department/create` - Create a new department
  - `PUT /api/department/update/:id` - Update department by ID
  - `DELETE /api/department/delete/:id` - Delete department by ID

- **Faculties:**
  - `GET /api/faculty/list` - Get all faculties
  - `GET /api/faculty/:id` - Get faculty by ID
  - `POST /api/faculty/create` - Create a new faculty
  - `PUT /api/faculty/update/:id` - Update faculty by ID
  - `DELETE /api/faculty/delete/:id` - Delete faculty by ID

- **Reports:**
  - `POST /api/report/create` - Create a new report
  - `DELETE /api/report/remove/:id` - Delete a report by ID

- **Requests:**
  - `POST /api/request/create` - Create a new student request
  - `GET /api/request` - Get all student requests
  - `GET /api/request/:id` - Get student request by ID
  - `PUT /api/request/:id` - Update student request by ID
  - `DELETE /api/request/:id` - Delete student request by ID
  - `GET /api/request/single/lecturer/:id` - Get single request for lecturer by ID (Authenticated)
  - `GET /api/request/lecturer` - Get requests for lecturer (Authenticated)
  - `PUT /api/request/reply/:id` - Reply to request (Authenticated)
  - `GET /api/request/student` - Get requests for student (Authenticated)
  - `GET /api/request/single/student/:id` - Get single request for student by ID (Authenticated)
  - `GET /api/request/student/lecturers` - Get lecturers for department (Authenticated)

- **Senior Groups:**
  - `GET /api/senior/lecturer/list` - Get senior groups for lecturer (Authenticated)
  - `GET /api/senior/studentGroup` - Get senior group for student (Authenticated)
  - `GET /api/senior/lecturer/students` - Get lecturer's students (Authenticated)
  - `GET /api/senior/files/:id` - Get group reports by ID
  - `POST /api/senior/addStudent/:groupId` - Add student to group by group ID
  - `DELETE /api/senior/removeStudent/:groupId` - Remove student from group by group ID
  - `GET /api/senior/:id` - Get senior group by ID
  - `POST /api/senior/create` - Create a new senior group
  - `PUT /api/senior/update/:id` - Update senior group by ID
  - `DELETE /api/senior/:id` - Delete senior group by ID

## Contributing

If you would like to contribute to this project, please reach out to us via GitHub.

## License

This project is licensed under the Tubitak License.

## Acknowledgments

We appreciate all the guidance and support provided by our professors and peers throughout the development of this project. Feel free to contact the project maintainers with any questions or feedback.
