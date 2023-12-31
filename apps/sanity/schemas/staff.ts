export interface Staff {
    id: string;
    name: string;
    role: string;
    image: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth: Date;
    gender: string;
    department: string;
    hireDate: Date;
    salary: number;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactRelationship: string;
    isActive: boolean;
}

export default {
    name: 'staff',
    title: 'Staff',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Staff Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'dateOfBirth',
            title: 'Date of Birth',
            type: 'datetime',
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
        },
        {
            name: 'department',
            title: 'Department',
            type: 'string',
        },
        {
            name: 'hireDate',
            title: 'Hire Date',
            type: 'datetime',
        },
        {
            name: 'salary',
            title: 'Salary',
            type: 'number',
        },
        {
            name: 'emergencyContactName',
            title: 'Emergency Contact Name',
            type: 'string',
        },
        {
            name: 'emergencyContactPhone',
            title: 'Emergency Contact Phone',
            type: 'string',
        },
        {
            name: 'emergencyContactRelationship',
            title: 'Emergency Contact Relationship',
            type: 'string',
        },
        {
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
        },
    ],
}